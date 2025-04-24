import { getItemById } from '@/lib/db/queries';
import { Item } from '@/lib/interfaces';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Карточка предмета | Бюро находок',
  description: 'Карточка предмета',
};

export default async function ItemPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const item: Item | null = await getItemById(Number(id));
  const t = await getTranslations();

  if (!item) {
    return <p className="p-4">{t('notFound')}</p>;
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <p className="font-bold text-2xl">
        {t('nameOfTable')}:<span className="ml-2 font-semibold text-xl">{item?.title}</span>
      </p>
      <p className="font-bold text-2xl">
        {t('descriptionOfForm')}:
        <span className="ml-2 font-semibold text-xl">{item?.description}</span>
      </p>
      <Image
        src={item?.imageUrl || ''}
        alt={item?.title || ''}
        width={200}
        height={200}
        priority
        className="w-auto h-auto rounded-2xl"
      />
      <Link
        href={`/item/${item.id}/edit`}
        className="inline-block mt-4 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        {t('edit')}
      </Link>
      {item.telegramId ? (
        <Link
          href={`tg://user?id=${item.telegramId}`}
          className="inline-block mt-4 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
        >
          {t('telegramLink')}
        </Link>
      ) : (
        <p className="text-gray-500">{t('noTelegramId')}</p>
      )}
    </div>
  );
}
