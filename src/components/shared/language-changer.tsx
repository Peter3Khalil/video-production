import { GlobeIcon } from '@/components/shared/icons';
import Link from 'next/link';
import React, { FC } from 'react';

type LanguageChangerProps = Omit<React.ComponentProps<typeof Link>, 'href'> & {
  lang: string;
  currentPage: string;
  href?: string;
};

const LanguageChanger: FC<LanguageChangerProps> = ({
  currentPage,
  lang,
  href,
  ...props
}) => {
  const myHref =
    href || `${lang === 'en' ? '/ar' + currentPage : '/en' + currentPage}`;
  return (
    <Link
      href={myHref}
      className="flex items-center gap-2"
      dir={lang === 'en' ? 'rtl' : 'ltr'}
      {...props}
    >
      <GlobeIcon size={24} />
      <span>{lang === 'en' ? 'ع' : 'En'}</span>
    </Link>
  );
};

export default LanguageChanger;
