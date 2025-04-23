import { LostFoundForm } from '@/components/LostFoundForm';
import { getItemById } from '@/lib/db/queries';
import { Item } from '@/lib/interfaces';
import { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Редактирование | Бюро находок",
    description: "Редактировать предмет",
}

export default async function EditItemPage({ params }: { params: { id: string } }) {
    const item = await getItemById(Number(params.id))

    if (!item) {
        return <p className='p-4'>Предмет не найден</p>;
    }

    return (
        <section className="p-2 flex flex-col gap-4">
            <LostFoundForm
                heading={`Редактирование предмета: ${item.title}`}
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
