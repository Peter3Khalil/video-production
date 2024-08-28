'use client';
import { MenuIcon, PhoneIcon } from '@/components/shared/icons';
import LanguageChanger from '@/components/shared/language-changer';
import Logo from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn, getDirection } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, useState } from 'react';

type MenuProps = React.HTMLAttributes<HTMLDivElement> & {
  lang: string;
  items: { title: string; href: string }[];
};

const MobileNav: FC<MenuProps> = ({ lang, items, className, ...props }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentPage = pathname.split(lang)[1];
  const { isMatched: isMobile } = useMediaQuery({ maxWidth: 768 });
  if (!isMobile) return null;
  return (
    <div
      className={cn(
        'text-md flex w-full items-center justify-between md:hidden',
        className,
      )}
      {...props}
    >
      <div className="flex flex-row-reverse items-center gap-2">
        <Link href={`/${lang}`}>
          <Logo width={100} height={100} />
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <MenuIcon size={24} />
          </SheetTrigger>
          <SheetContent side={getDirection(lang) === 'rtl' ? 'right' : 'left'}>
            <nav className="mt-10">
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <li
                    key={item.title}
                    className={cn(
                      'rounded-lg px-4 py-1 capitalize text-muted-foreground duration-300 hover:bg-accent hover:text-foreground',
                      {
                        'text-foreground': pathname === item.href,
                      },
                    )}
                  >
                    <Link
                      onClick={() => setOpen(false)}
                      href={item.href}
                      className="block"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center gap-4">
        <Button className="text-xs font-bold" asChild>
          <Link href={`#contact`}>
            <PhoneIcon size={20} className="shrink-0" />
          </Link>
        </Button>
        <LanguageChanger lang={lang} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default MobileNav;
