import './globals.css';
import { routing } from '@/i18n/routing';
import MainTitle from '@/components/MainTitle';
import ModeToggle from '@/components/ModeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import FooterButtons from '@/components/FooterButtons';
import InitTelegramClient from '@/components/InitTelegramClient';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <header className="p-2 flex justify-between items-center dark:border-b-2 dark:border-zinc-300 border-zinc-900 border-b-2">
        <InitTelegramClient />
        <section className="flex ml-auto items-center">
          <h2 className="text-3xl font-bold text-primary border-muted pb-1">
            <MainTitle />
          </h2>
        </section>
        <section className="flex flex-col gap-2 ml-auto items-center">
          <ModeToggle />
          <LanguageToggle />
        </section>
      </header>

      <main className="flex-1 overflow-y-auto h-full">{children}</main>

      <footer className="sticky bottom-0 left-0 right-0 dark:border-t-2 dark:border-zinc-300 border-zinc-900 border-t-2 dark:bg-zinc-900 bg-zinc-100">
        <FooterButtons />
      </footer>
    </>
  );
}
