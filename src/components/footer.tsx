import { getLangFromHeaders } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import React from 'react';

const Footer = () => {
  const lang = getLangFromHeaders(headers);
  unstable_setRequestLocale(lang);
  const t = useTranslations('HomePage.sections');
  const links = [
    {
      title: 'YouTube',
      url: 'https://youtube.com/@dynamic_saudi?si=EM00Pk1xu-Gs7zHn',
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/dynamic_saudi?igsh=ODhmcXZzanN3N21s',
    },
    {
      title: 'TiKTok',
      url: 'https://www.tiktok.com/@dynamic_saudi?_t=8pC1L0Et6TB&_r=1',
    },
    {
      title: 'Snapchat',
      url: 'https://www.snapchat.com/add/dynamic_saudi',
    },
  ];
  const year = new Date().getFullYear();
  return (
    <footer className="border-t py-6 text-center">
      <ul className="inline-flex flex-col gap-2 text-muted-foreground sm:flex-row sm:gap-4">
        {links.map((link) => (
          <li
            key={link.url}
            className="text-xs duration-300 hover:text-foreground hover:underline"
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <p className="mt-4 inline-flex text-xs">
          {t('footer')}
          <span className="mx-1">{year}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
