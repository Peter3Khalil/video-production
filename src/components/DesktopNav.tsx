'use client';
import { GlobeIcon } from '@/components/shared/icons';
import Logo from '@/components/shared/logo';
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
    </nav>
  );
};

export default DesktopNav;
