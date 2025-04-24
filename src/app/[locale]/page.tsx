import MainTable from '@/components/MainTable';
import SearchComponent from '@/components/SearchComponent';
import { Button } from '@/components/ui/Button';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function Home() {
  const t = await getTranslations();

  return (
    <>
      <section className="flex flex-col">
        <header className="p-3">
          <SearchComponent />
        </header>
        <section className="flex justify-around items-center gap-2">
          <Button className="text-2xl p-8">
            <Link href="/add/lost">{t('ILost')}</Link>
          </Button>
          <Button className="text-2xl p-8">
            <Link href="/add/found">{t('IFound')}</Link>
          </Button>
        </section>
        <MainTable />
      </section>
    </>
  );
}
