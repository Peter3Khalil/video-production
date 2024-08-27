import { GlobeIcon, MenuIcon } from '@/components/shared/icons';
import Logo from '@/components/shared/logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn, getDirection, getLangFromHeaders } from '@/lib/utils';
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

  const sections = ['home', 'projects', 'our_clients'];
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
        {/* Desktop only */}
        <div className="hidden w-full items-center justify-between md:flex">
          <div className="flex items-center gap-12">
            <Link href={`/${lang}`} className="hidden md:block">
              <Logo />
            </Link>
            <ul className="flex items-center gap-4">
              {sections.map((section) => (
                <li
                  key={section}
                  className="text-xs capitalize text-muted-foreground duration-300 hover:text-foreground"
                >
                  <Link href={`#${section}`}>{t(section)}</Link>
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

        {/* Mobile only */}
        <div className="flex w-full items-center justify-between md:hidden">
          <div className="flex flex-row-reverse items-center gap-2">
            <Link href={`/${lang}`}>
              <Logo width={100} height={100} />
            </Link>

            <Sheet>
              <SheetTrigger>
                <MenuIcon size={24} />
              </SheetTrigger>
              <SheetContent
                side={getDirection(lang) === 'rtl' ? 'right' : 'left'}
              >
                <nav className="mt-10">
                  <ul className="flex flex-col gap-4">
                    {sections.map((section) => (
                      <Link href={`#${section}`} key={section}>
                        <li className="text-md rounded-lg px-4 py-1 capitalize text-muted-foreground duration-300 hover:bg-accent hover:text-foreground">
                          {t(section)}
                        </li>
                      </Link>
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
      </nav>
    </header>
  );
};

export default Header;
