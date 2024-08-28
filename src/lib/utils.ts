import { type ClassValue, clsx } from 'clsx';
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isClient = () => typeof window !== 'undefined';

export const Capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getDirection = (language: string): 'rtl' | 'ltr' => {
  return language === 'ar' ? 'rtl' : 'ltr';
};

export const getLangFromHeaders = (headers: () => ReadonlyHeaders) => {
  const lang = getPathnameFromHeaders(headers).split('/')[1];
  return lang;
};

export const getPathnameFromHeaders = (headers: () => ReadonlyHeaders) => {
  const headersList = headers();
  const currentUrl = headersList.get('x-url') || '';
  const url = new URL(currentUrl);
  return url.pathname;
};
