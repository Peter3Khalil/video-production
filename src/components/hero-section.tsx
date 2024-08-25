import {
  Section,
  SectionDescription,
  SectionHeader,
} from '@/components/layouts/section';
import { getLangFromHeaders } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import Image from 'next/image';
import React, { FC } from 'react';

const HeroSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  const lang = getLangFromHeaders(headers);
  unstable_setRequestLocale(lang);
  const t = useTranslations('HomePage.sections.hero');
  return (
    <Section
      {...props}
      className="relative flex h-[70vh] flex-col items-center justify-center px-12 md:h-[80vh]"
    >
      <SectionHeader>
        <h1 className="text-3xl font-bold leading-none md:text-nowrap md:text-5xl">
          {t('title')}
        </h1>
        <SectionDescription>{t('description')}</SectionDescription>
      </SectionHeader>
      <div className="hero-image absolute -z-10 h-full w-full">
        <Image
          src="/hero.webp"
          fill
          loading="eager"
          alt="Hero Image"
          className="absolute left-0 top-0 -z-10 size-full object-cover object-center"
        />
      </div>
    </Section>
  );
};

export default HeroSection;
