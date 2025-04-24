import { LostFoundForm } from '@/components/LostFoundForm';
import { getItemById } from '@/lib/db/queries';
import { Item } from '@/lib/interfaces';
import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Редактирование | Бюро находок",
    description: "Редактировать предмет",
}

export default async function EditItemPage({ params }: { params: { id: string } }) {
    const t = await getTranslations()
    const item = await getItemById(Number(params.id))

    if (!item) {
        return <p className='p-4'>{t('notFound')}</p>;
    }

    return (
        <section className="p-2 flex flex-col gap-4">
            <LostFoundForm
                heading={`${t('edit')}: ${item.title}`}
                type={item.type}
                itemId={item.id}
                initialValues={{
                    title: item.title,
                    city: item.city,
                    description: item.description,
                    imageUrl: item.imageUrl ?? undefined
                }}
            />
        </section>
    )
}
