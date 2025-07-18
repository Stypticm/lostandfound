'use client';

import { Item } from '@/lib/interfaces';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/Table';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

type DisplayItem = Pick<Item, 'id' | 'title' | 'city' | 'createdAt'>;

const TableLostItems = ({
  lostItems,
  count,
}: {
  lostItems: DisplayItem[] | undefined;
  count?: number;
}) => {
  const t = useTranslations();
  const [formattedItems, setFormattedItems] = useState<DisplayItem[] | undefined>([]);
  const router = useRouter();

  useEffect(() => {
    if (lostItems) {
      setFormattedItems(lostItems);
    }
  }, [lostItems]);

  const handleRowClick = (id: number) => {
    router.push(`/item/${id}`);
  };

  return (
    <section className="m-2">
      <Table>
        <TableHeader>
          <TableRow className="font-bold text-xl">
            <TableHead>{t('nameOfTable')}</TableHead>
            <TableHead>{t('city')}</TableHead>
            <TableHead>{t('dateOfTable')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {formattedItems && formattedItems.length > 0 ? (
            count ? (
              formattedItems.slice(0, count).map((item: DisplayItem) => (
                <TableRow key={item.id} onClick={() => handleRowClick(item.id as number)}>
                  <TableCell>
                    {item.title.length > 7 ? `${item.title.slice(0, 7)}...` : item.title}
                  </TableCell>
                  <TableCell>
                    {item.city.length > 7 ? `${item.city.slice(0, 7)}...` : `${item.city}`}
                  </TableCell>
                  <TableCell>{item.createdAt}</TableCell>
                </TableRow>
              ))
            ) : (
              formattedItems.map((item: DisplayItem) => (
                <TableRow key={item.id} onClick={() => handleRowClick(item.id as number)}>
                  <TableCell>
                    {item.title.length > 7 ? `${item.title.slice(0, 7)}...` : item.title}
                  </TableCell>
                  <TableCell>
                    {item.city.length > 7 ? `${item.city.slice(0, 7)}...` : `${item.city}`}
                  </TableCell>
                  <TableCell>{item.createdAt}</TableCell>
                </TableRow>
              ))
            )
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                {t('nothingFound')}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
};

export default TableLostItems;
