import MainTable from '@/components/MainTable';
import SearchComponent from '@/components/SearchComponent';
import { Button } from '@/components/ui/Button';
import { Locale, useTranslations } from 'next-intl';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function Home({ params }: Props) {
  const t = useTranslations();

  return (
    <>
      <section className='flex flex-col'>
        <header className="p-3">
          <SearchComponent />
        </header>
        <section className='flex justify-around items-center gap-2'>
          <Button className="text-2xl p-8">
            <Link href="/add/lost">
              {t('ILost')}
            </Link>
          </Button>
          <Button className="text-2xl p-8">
            <Link href="/add/found">
              {t('IFound')}
            </Link>
          </Button>
        </section>
        <MainTable />
      </section >
    </>
  );
}
