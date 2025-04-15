'use client';

import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { uploadImageToSupabase } from '@/lib/uploadImageToSupabase';
import { X } from 'lucide-react'
import { deleteImageFromSupabase } from '@/lib/deleteImageFromSupabase';
import { addItem } from '@/lib/db/queries';
import toast from 'react-hot-toast';

const formSchema = z.object({
  title: z.string().min(4, { message: "Название должно содержать не менее 4 символов" }),
  city: z.string().min(5, { message: "Название города должно содержать не менее 5 символов" }),
  description: z.string().min(10, { message: "Описание должно содержать не менее 10 символов" }),
  imageUrl: z.string().url().optional(),
})

type Props = {
  heading: string
  type: "lost" | "found"
  redirectAfterSubmit?: string
}

export const LostFoundForm = ({ heading, type, redirectAfterSubmit = '/' }: Props) => {

  const router = useRouter()
  const [uploading, setUploading] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      city: "",
      description: "",
      imageUrl: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const addNewItem = await addItem({...values, type})
      if (addNewItem) {
        toast.success('Объявление добавлено!')
        router.push(redirectAfterSubmit)
      } else {
        toast.error('Произошла ошибка при добавлении объявления')
      }
    } catch (error) {
      console.log(error)
      toast.error('Произошла ошибка при отправке')
    }
    router.push('/')
  }

  const onReset = () => {
    form.reset({
      title: "",
      city: "",
      description: "",
      imageUrl: "",
    })
    setUploadedImage(null);
    router.push('/')
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (uploadedImage) return;

    setUploading(true);
    try {
      const url = await uploadImageToSupabase(file, type);
      form.setValue("imageUrl", url);
      setUploadedImage(url);
    } catch (error) {
      console.error("Ошибка при загрузке:", error);
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const deleteImage = async () => {
    const imageUrl = form.getValues("imageUrl");
    if (!imageUrl) return;

    const result = await deleteImageFromSupabase(imageUrl);

    if (result.success) {
      form.setValue("imageUrl", "");
      setUploadedImage(null);
    } else {
      console.error("Ошибка при удалении изображения:", result.error);
    }
  };

  return (
    <section>
      <h2 className='text-2xl font-bold text-center pb-10'>{heading}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="text-2xl py-8 bg-zinc-900 text-zinc-50" placeholder="Название" {...field} />
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
                  <Input className="text-2xl py-8 bg-zinc-900" placeholder="Город" {...field} />
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
                  <Input className="text-2xl py-8 bg-zinc-900" placeholder="Описание" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  {uploadedImage ? (
                    <section className="space-y-4 flex flex-col justify-center items-center relative p-4">
                      <img
                        src={uploadedImage}
                        alt="Загруженное изображение"
                        className="max-h-36 rounded-xl border border-zinc-700"
                      />
                      <X className='absolute top-1 right-2 text-red-600 cursor-pointer' onClick={deleteImage} />
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
          <footer className='flex gap-2 justify-around items-center'>
            <Button type="submit" className=' text-2xl p-10' disabled={uploading}>
              {
                uploading ? "Загрузка..." : "Отправить"
              }
            </Button>
            <Button type="button" onClick={onReset} className=' text-2xl p-10'>Отмена</Button>
          </footer>
        </form>
      </Form>
    </section>
  )
}