import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ModeToggle from '@/components/ModeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import FooterButtons from '@/components/FooterButtons';
import Link from 'next/link';

import ClientProviders from '@/components/ClientProviders';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Lost&Found',
  description: 'Lost & Found App',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ClientProviders>
          <header className='p-2 flex justify-between items-center dark:border-b-2 dark:border-zinc-300 border-zinc-900 border-b-2'>
            <section className="flex ml-auto items-center">
              <h2 className="text-3xl font-bold text-primary border-muted pb-1">
                {/* <Link href="/">
                  Lost&Found
                </Link> */}
                <Link href="/">
                  Бюро находок
                </Link>
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
        </ClientProviders>
      </body>
    </html>
  );
}
