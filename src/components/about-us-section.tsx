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
      <SectionHeader>
        <SectionTitle>{t('title')}</SectionTitle>
      </SectionHeader>
      <SectionContent className="text-center">
        <p className="mx-auto text-muted-foreground md:w-[70%] md:max-w-lg">
          {t('description')}
        </p>
      </SectionContent>
    </Section>
  );
};

export default AboutUsSection;
