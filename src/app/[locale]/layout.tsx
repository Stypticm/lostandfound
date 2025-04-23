import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AbstractIntlMessages, hasLocale, NextIntlClientProvider, Locale } from 'next-intl'
import { getLocale, getMessages, setRequestLocale } from 'next-intl/server';
import ClientProviders from '@/components/ClientProviders';
import { SearchProvider } from '@/components/SearchContext';
import MainTitle from '@/components/MainTitle';
import ModeToggle from '@/components/ModeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import FooterButtons from '@/components/FooterButtons';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { routing } from '@/i18n/routing';

type Props = {
  children: ReactNode;
  params: { locale: Locale };
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider locale={locale} messages={messages as AbstractIntlMessages}>
          <ClientProviders>
            <SearchProvider>
              <header className='p-2 flex justify-between items-center dark:border-b-2 dark:border-zinc-300 border-zinc-900 border-b-2'>
                <section className="flex ml-auto items-center">
                  <h2 className="text-3xl font-bold text-primary border-muted pb-1">
                    <MainTitle />
                  </h2>
                </section>
                <section className='flex flex-col gap-2 ml-auto items-center'>
                  <ModeToggle />
                  <LanguageToggle />
                </section>
              </header>

              <main className="flex-1 overflow-y-auto h-full">
                {children}
              </main>

              <footer className="sticky bottom-0 left-0 right-0 dark:border-t-2 dark:border-zinc-300 border-zinc-900 border-t-2 dark:bg-zinc-900 bg-zinc-100">
                <FooterButtons />
              </footer>
            </SearchProvider>
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
