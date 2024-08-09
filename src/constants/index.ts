import { Noto_Sans } from 'next/font/google';

export const APP_FONT = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['italic', 'normal'],
  fallback: ['sans-serif'],
});
