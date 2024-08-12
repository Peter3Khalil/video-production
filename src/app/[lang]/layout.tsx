import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { getDirection } from '@/lib/utils';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import React from 'react';

export const dynamicParams = false;

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: lang, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  unstable_setRequestLocale(lang);

  const messages = await getMessages();

  return (
    <html lang={lang} dir={getDirection(lang)}>
      <body className="min-h-svh bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
