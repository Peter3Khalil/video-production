import DesktopNav from '@/components/DesktopNav';
import MobileNav from '@/components/MobileNav';
import { NAVIGATION_LINKS } from '@/constants';
import { cn, getLangFromHeaders } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import React, { FC } from 'react';

const Header: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const lang = getLangFromHeaders(headers);
  unstable_setRequestLocale(lang);
  const t = useTranslations('shared.header');
  const items = NAVIGATION_LINKS.map((link) => ({
    ...link,
    href: link.title === 'home' ? '/' + lang : '/' + lang + link.href,
  })).map((link) => ({
    ...link,
    title: t(link.title),
  }));
  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-30 flex h-16 w-full items-center border-b bg-background px-4 lg:px-12',
        className,
      )}
      {...props}
    >
      <section className="w-full">
        <DesktopNav lang={lang} items={items} />
        <MobileNav lang={lang} items={items} />
      </section>
    </header>
  );
};

export default Header;
