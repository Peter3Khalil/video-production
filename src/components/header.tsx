import { GlobeIcon, MenuIcon } from '@/components/shared/icons';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn, getDirection } from '@/lib/utils';
import Link from 'next/link';
import React, { FC } from 'react';
import { headers } from 'next/headers';

const Header: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const headersList = headers();
  const currentUrl = headersList.get('x-url') || '';
  const url = new URL(currentUrl);
  const lang = url.pathname.split('/')[1];

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
            <Link
              href={`/${lang}`}
              className="hidden text-2xl font-bold leading-none md:block"
            >
              Logo
            </Link>
            <ul className="flex items-center gap-4">
              {[1, 2, 3, 4].map((item) => (
                <li
                  key={item}
                  className="text-sm text-muted-foreground duration-300 hover:text-foreground"
                >
                  <Link href={`/page-${item}`}>Page {item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-6">
            <Button asChild size={'sm'}>
              <Link href="#projects">Explore Projects</Link>
            </Button>
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
            <Link href={`/${lang}`} className="text-2xl font-bold leading-none">
              Logo
            </Link>

            <Sheet>
              <SheetTrigger>
                <MenuIcon size={24} />
              </SheetTrigger>
              <SheetContent
                side={getDirection(lang) === 'rtl' ? 'right' : 'left'}
              >
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <Link
            href={`/${lang === 'en' ? 'ar' : 'en'}`}
            className="flex items-center gap-2"
            dir={lang === 'en' ? 'rtl' : 'ltr'}
          >
            <GlobeIcon size={24} />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
