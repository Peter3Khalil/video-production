import '@/app/globals.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
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
  const t = await getTranslations({ locale: lang, namespace: 'HomePage' });

  return {
    title: {
      default: t('metadata.title'),
      template: '%s | ' + t('metadata.title'),
    },
    description: t('metadata.description'),
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
      <body className="dark h-svh overflow-y-auto bg-background text-foreground antialiased">
        <Header />
        <NextIntlClientProvider messages={messages}>
          <main className="pt-16">{children}</main>
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
