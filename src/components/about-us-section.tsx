import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionContent,
} from '@/components/layouts/section';
import { getLangFromHeaders } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import React, { FC } from 'react';

const AboutUsSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  const lang = getLangFromHeaders(headers);
  unstable_setRequestLocale(lang);
  const t = useTranslations('HomePage.sections.about');
  return (
    <Section {...props}>
      <SectionHeader className="mx-auto md:max-w-sm">
        <SectionTitle className="text-3xl font-bold leading-none">
          {t('title')}
        </SectionTitle>
      </SectionHeader>
      <SectionContent className="mt-6 text-center">
        <p className="mx-auto text-lg text-muted-foreground md:w-[70%] md:max-w-lg">
          {t('description')}
        </p>
      </SectionContent>
    </Section>
  );
};

export default AboutUsSection;
