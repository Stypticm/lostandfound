'use client';

import { Item } from '@/lib/interfaces';
import TableFoundItems from './TableFoundItems';
import Link from 'next/link';
import TableLostItems from './TableLostItems';
import { useSearch } from './SearchContext';
import FilteredItemsTable from './FilteredItemsTable';
import { useDebounce } from '@/lib/hook/useDebounce';
import { useTranslations } from 'next-intl';

interface ClientTableProps {
  foundItems: Item[];
  lostItems: Item[];
}

const ClientTable = ({ foundItems, lostItems }: ClientTableProps) => {
  const t = useTranslations();
  const { searchQuery } = useSearch();
  const debouncedSearch = useDebounce(searchQuery, 300);

  const normalizedSearch = debouncedSearch.trim().toLowerCase();

  const hasSearch = normalizedSearch.length > 0;

  const allItems = [...foundItems, ...lostItems];
  const filteredItems = allItems.filter((item) =>
    item.title.toLowerCase().includes(normalizedSearch),
  );

  return (
    <section className="flex flex-col gap-2 pt-2">
      {hasSearch ? (
        <>
          <h2 className="text-2xl font-bold text-center">{t('resultOfSearch')}</h2>
          <FilteredItemsTable filteredItems={filteredItems} />
          <p className="text-center text-sm text-muted-foreground">{t('descForTable')}</p>
        </>
      ) : (
        <>
          <section className="flex flex-col">
            <h2 className="text-2xl font-bold text-center">
              {t('recentlyFound')} — <br />
              <Link href="/found" className="underline text-primary">
                {t('seeAll')}
              </Link>
            </h2>
            <TableFoundItems foundItems={foundItems} count={3} />
            <p className="text-center text-sm text-muted-foreground">{t('descForTable')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-center">
              {t('recentlyLost')} — <br />
              <Link href="/lost" className="underline text-primary">
                {t('seeAll')}
              </Link>
            </h2>
            <TableLostItems lostItems={lostItems} count={3} />
            <p className="text-center text-sm text-muted-foreground">{t('descForTable')}</p>
          </section>
        </>
      )}
    </section>
  );
};

export default ClientTable;
