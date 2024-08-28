import { GlobeIcon, MenuIcon } from '@/components/shared/icons';
import Logo from '@/components/shared/logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  cn,
  getDirection,
  getLangFromHeaders,
  getPathnameFromHeaders,
} from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import Link from 'next/link';
import React, { FC } from 'react';

const Header: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const lang = getLangFromHeaders(headers);
  unstable_setRequestLocale(lang);
  const t = useTranslations('HomePage.sections.header');
  const pathname = getPathnameFromHeaders(headers);

  const pages = [
    {
      title: 'home',
      href: '/' + lang,
    },
    {
      title: 'vision',
      href: '/' + lang + '/vision',
    },
    {
      title: 'about',
      href: '/' + lang + '/about',
    },
    {
      title: 'why_choose_us',
      href: '/' + lang + '/why_choose_us',
    },
    {
      title: 'services',
      href: '/' + lang + '/services',
    },
    {
      title: 'contact',
      href: '/' + lang + '/contact',
    },
  ];
  // const pages = ['vision', 'about', 'why_choose_us', 'services', 'contact'];

  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-30 flex h-16 w-full items-center border-b bg-background px-4 lg:px-12',
        className,
      )}
      {...props}
    >
      <nav className="w-full">
        <DesktopMenu
          lang={lang}
          pages={pages.map((page) => ({ ...page, title: t(page.title) }))}
          pathname={pathname}
        />
        <MobileMenu
          lang={lang}
          pages={pages.map((page) => ({ ...page, title: t(page.title) }))}
          pathname={pathname}
        />
      </nav>
    </header>
  );
};

type MenuProps = {
  lang: string;
  pages: { title: string; href: string }[];
  pathname?: string;
};

const MobileMenu: FC<MenuProps> = ({ lang, pages, pathname = '/' }) => {
  return (
    <div className="flex w-full items-center justify-between md:hidden">
      <div className="flex flex-row-reverse items-center gap-2">
        <Link href={`/${lang}`}>
          <Logo width={100} height={100} />
        </Link>

        <Sheet>
          <SheetTrigger>
            <MenuIcon size={24} />
          </SheetTrigger>
          <SheetContent side={getDirection(lang) === 'rtl' ? 'right' : 'left'}>
            <nav className="mt-10">
              <ul className="flex flex-col gap-4">
                {pages.map((page) => (
                  <li
                    key={page.title}
                    className={cn(
                      'text-md rounded-lg px-4 py-1 capitalize text-muted-foreground duration-300 hover:bg-accent hover:text-foreground',
                      {
                        'text-foreground': isActive(pathname, page.href),
                      },
                    )}
                  >
                    <Link href={page.href} className="block">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center gap-6">
        <Link
          href={`/${lang === 'en' ? 'ar' : 'en'}`}
          className="flex items-center gap-2"
          dir={lang === 'en' ? 'rtl' : 'ltr'}
        >
          <GlobeIcon size={24} />
          <span>{lang === 'en' ? 'العربية' : 'English'}</span>
        </Link>
      </div>
    </div>
  );
};

const DesktopMenu: FC<MenuProps> = ({ lang, pages, pathname = '/' }) => {
  return (
    <div className="hidden w-full items-center justify-between md:flex">
      <div className="flex items-center gap-12">
        <Link href={`/${lang}`} className="hidden md:block">
          <Logo />
        </Link>
        <ul className="flex items-center gap-4">
          {pages.map((page) => (
            <li
              key={page.title}
              className={cn(
                'text-xs capitalize text-muted-foreground duration-300 hover:text-foreground',
                {
                  'text-foreground': isActive(pathname, page.href),
                },
              )}
            >
              <Link href={page.href}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <Link
          href={`/${lang === 'en' ? 'ar' : 'en'}`}
          className="flex items-center gap-2"
          dir={lang === 'en' ? 'rtl' : 'ltr'}
        >
          <GlobeIcon size={24} />
          <span>{lang === 'en' ? 'العربية' : 'English'}</span>
        </Link>
      </div>
    </div>
  );
};

const isActive = (pathname: string, href: string) => {
  return pathname === href;
};

export default Header;
