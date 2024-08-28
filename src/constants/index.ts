import { Noto_Sans } from 'next/font/google';

export const APP_FONT = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['italic', 'normal'],
  fallback: ['sans-serif'],
});

export const NAVIGATION_LINKS = [
  {
    title: 'home',
    href: '/',
  },
  {
    title: 'vision',
    href: '/vision',
  },
  {
    title: 'about',
    href: '/about',
  },
  {
    title: 'why_choose_us',
    href: '/why_choose_us',
  },
  {
    title: 'services',
    href: '/services',
  },
  {
    title: 'contact',
    href: '/contact',
  },
];
