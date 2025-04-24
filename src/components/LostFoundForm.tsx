'use client';

import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { uploadImageToSupabase } from '@/lib/uploadImageToSupabase';
import { X } from 'lucide-react';
import { deleteImageFromSupabase } from '@/lib/deleteImageFromSupabase';
import toast from 'react-hot-toast';
import { formSchema, FormValues } from '@/lib/formSchema';
import { useFormMessages } from '@/lib/hook/useFormMessages';
import { useLocale } from 'next-intl';

type Props = {
  heading: string;
  type: 'lost' | 'found';
  initialValues?: Partial<FormValues>;
  itemId?: number;
  onSubmitOverride?: (values: FormValues) => Promise<void>;
  redirectAfterSubmit?: string;
};

export const LostFoundForm = ({
  heading,
  type,
  initialValues,
  itemId,
  onSubmitOverride,
  redirectAfterSubmit = '/',
}: Props) => {
  const dict = useFormMessages();
  const schema = formSchema(dict);
  const router = useRouter();
  const locale = useLocale();
  const [uploading, setUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: initialValues?.title || '',
      city: initialValues?.city || '',
      description: initialValues?.description || '',
      imageUrl: initialValues?.imageUrl || '',
    },
  });

  useEffect(() => {
    if (initialValues?.imageUrl) {
      setUploadedImage(initialValues.imageUrl);
    }
  }, [initialValues?.imageUrl]);

  const onSubmit = async (values: FormValues) => {
    try {
      if (onSubmitOverride) {
        await onSubmitOverride(values);
      } else {
        const response = await fetch(
          itemId ? `/${locale}/api/items/${itemId}` : `/${locale}/api/items`,
          {
            method: itemId ? 'PATCH' : 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...values, type }),
          },
        );

        if (!response.ok) {
          toast.error(`${dict.messageFormError}`);
          return;
        }
      }

      toast.success(itemId ? `${dict.itemUpdated}` : `${dict.itemAdded}`);
      router.push(redirectAfterSubmit);
    } catch (error) {
      console.log(error);
      toast.error(`${dict.messageFormError}`);
    }
  };

  const onReset = () => {
    form.reset();
    setUploadedImage(initialValues?.imageUrl || null);
    router.push(redirectAfterSubmit);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || uploadedImage) return;

    setUploading(true);
    try {
      const url = await uploadImageToSupabase(file, type);
      form.setValue('imageUrl', url);
      setUploadedImage(url);
    } catch (error) {
      console.error(`${dict.messageFormDownloadError}:`, error);
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const deleteImage = async () => {
    const imageUrl = form.getValues('imageUrl');
    if (!imageUrl) return;

    const result = await deleteImageFromSupabase(imageUrl);

    if (result.success) {
      form.setValue('imageUrl', '');
      setUploadedImage(null);
    } else {
      console.error(`${dict.messageFormDeleteError}:`, result.error);
    }
  };

  return (
    <section className="flex flex-col p-4">
      <h2 className="text-3xl font-bold text-center p-2">{heading}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-2xl py-8 bg-zinc-900 text-zinc-50"
                    placeholder={dict.nameOfTable}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="text-2xl py-8 bg-zinc-900" placeholder={dict.city} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-2xl py-8 bg-zinc-900"
                    placeholder={dict.descriptionOfForm}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={() => (
              <FormItem>
                <FormControl>
                  {uploadedImage ? (
                    <section className="space-y-4 flex flex-col justify-center items-center relative p-4">
                      <img
                        src={uploadedImage}
                        alt={dict.uploadedImage}
                        className="max-h-36 rounded-xl border border-zinc-700"
                      />
                      <X
                        className="absolute top-1 right-2 text-red-600 cursor-pointer"
                        onClick={deleteImage}
                      />
                    </section>
                  ) : (
                    <Input
                      type="file"
                      accept="image/*"
                      className="text-2xl py-8 bg-zinc-900"
                      onChange={handleFileChange}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <footer className="flex gap-2 justify-around items-center">
            <Button type="submit" className=" text-2xl p-8" disabled={uploading}>
              {uploading ? `${dict.loading}` : itemId ? `${dict.save}` : `${dict.send}`}
            </Button>
            <Button type="button" onClick={onReset} className=" text-2xl p-8">
              {`${dict.reset}`}
            </Button>
          </footer>
        </form>
      </Form>
    </section>
  );
};
