import { Geist, Geist_Mono } from 'next/font/google';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import ClientProviders from '@/components/ClientProviders';
import { SearchProvider } from '@/components/SearchContext';
import MainTitle from '@/components/MainTitle';
import ModeToggle from '@/components/ModeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import FooterButtons from '@/components/FooterButtons';
import { ReactNode } from 'react';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export default async function RootLayout({ children, params }
    : {
        children: ReactNode,
        params: Promise<{ locale: string }>
    }) {

    const { locale } = await params;

    // if (!hasLocale(routing.locales, locale)) {
    //     notFound();
    // }
    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
            >
                <NextIntlClientProvider>
                    <ClientProviders>
                        <SearchProvider>
                            {children}
                        </SearchProvider>
                    </ClientProviders>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
