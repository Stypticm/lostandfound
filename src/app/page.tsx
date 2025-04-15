import MainTable from '@/components/MainTable';
import { Button } from '@/components/ui/Button';
import { Input } from '@components/ui/Input';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className='flex flex-col'>
        <header className="p-3">
          <Input type="email" placeholder="Поиск по названию или городу..." className="h-15 text-xl dark:bg-zinc-300 dark:text-zinc-900 bg-zinc-900" />
        </header>
        <section className='flex justify-around items-center gap-2'>
          <Button className="text-2xl p-8">
            <Link href="/add/lost">
              Я потерял
            </Link>
          </Button>
          <Button className="text-2xl p-8">
            <Link href="/add/found">
              Я нашел
            </Link>
          </Button>
        </section>
        <MainTable />
      </section>
    </>
  );
}
