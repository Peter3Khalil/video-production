import {
  Section,
  SectionHeader,
  SectionDescription,
  SectionContent,
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
    <Section {...props} className="px-12">
      <SectionHeader>
        <h1 className="text-3xl font-bold leading-none md:text-nowrap md:text-5xl">
          {t('title')}
        </h1>
        <SectionDescription>{t('description')}</SectionDescription>
      </SectionHeader>
      <SectionContent className="mt-6 lg:w-[80%]">
        <Image
          src="/hero.webp"
          width={560 * 1.5}
          height={560}
          loading="eager"
          alt="Hero Image"
          className="w-full rounded-lg"
        />
      </SectionContent>
    </Section>
  );
};

export default HeroSection;
