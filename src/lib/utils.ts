import { type ClassValue, clsx } from 'clsx';
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
