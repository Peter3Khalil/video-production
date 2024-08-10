import { MenuIcon } from '@/components/shared/icons';
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
      <nav className="flex w-full items-center justify-between">
        <Link href="/" className="text-2xl font-bold leading-none">
          Logo
        </Link>
        <ul className="hidden items-center gap-4 md:flex">
          {[1, 2, 3, 4].map((item) => (
            <li
              key={item}
              className="text-sm text-muted-foreground duration-300 hover:text-foreground"
            >
              <Link href={`/page-${item}`}>Page {item}</Link>
            </li>
          ))}
        </ul>

        <Button asChild size={'sm'} className="hidden md:flex">
          <Link href="#projects">Explore Projects</Link>
        </Button>
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon size={24} />
            </SheetTrigger>
            <SheetContent
              side={getDirection(lang) === 'rtl' ? 'left' : 'right'}
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
      </nav>
    </header>
  );
};

export default Header;
