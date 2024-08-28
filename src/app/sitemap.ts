import { NAVIGATION_LINKS } from '@/constants';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority?: number;
  alternates?: {
    languages?: Languages<string>;
  };
}>;

type Languages<T> = {
  [key: string]: T;
};

export default function sitemap(): Sitemap {
  const urls = NAVIGATION_LINKS.map((link) => ({
    url: link.href,
    lastModified: new Date(),
    alternates: {
      languages: {
        ar: `${BASE_URL}/ar${link.href}`,
        en: `${BASE_URL}/en${link.href}`,
      },
    },
  }));
  return urls;
}
