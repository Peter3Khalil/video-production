'use client';
import LanguageChanger from '@/components/shared/language-changer';
import Logo from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

type MenuProps = React.HTMLAttributes<HTMLDivElement> & {
  lang: string;
  items: { title: string; href: string }[];
};

const DesktopNav: FC<MenuProps> = ({ lang, items, className, ...props }) => {
  const pathname = usePathname();
  const currentPage = pathname.split(lang)[1];
  const { isMatched: isLargeScreen } = useMediaQuery({ minWidth: 768 });
  if (!isLargeScreen) return null;
  return (
    <nav
      className={cn(
        'hidden w-full items-center justify-between text-xs md:flex',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-12">
        <Link href={`/${lang}`} className="hidden md:block">
          <Logo />
        </Link>
        <ul className="flex items-center gap-4">
          {items.map((item) => (
            <li
              key={item.title}
              className={cn(
                'capitalize text-muted-foreground duration-300 hover:text-foreground',
                {
                  'text-foreground': pathname === item.href,
                },
              )}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Button className="text-xs font-bold" asChild>
          <Link href={`#contact`}>
            {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </Link>
        </Button>
        <LanguageChanger lang={lang} currentPage={currentPage} />
      </div>
    </nav>
  );
};

export default DesktopNav;
