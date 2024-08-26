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
      className="relative flex h-[40vh] flex-col items-center justify-center px-12 text-center md:h-[80vh]"
    >
      <SectionHeader>
        <h1 className="text-nowrap text-xl font-bold leading-none md:text-5xl">
          {t('title')}
        </h1>
        <SectionDescription className="text-xs text-accent-foreground/80">
          {t('description')}
        </SectionDescription>
      </SectionHeader>
      <div className="hero-image absolute -z-10 h-full w-full lg:w-[80%]">
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
