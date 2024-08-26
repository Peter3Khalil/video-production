import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/layouts/section';
import Marquee from '@/components/magicui/marquee';
import { getLangFromHeaders } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import Image from 'next/image';
import React, { FC } from 'react';

const OurClientsSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  const lang = getLangFromHeaders(headers);
  unstable_setRequestLocale(lang);
  const t = useTranslations('HomePage.sections.customers');
  const images = Array.from({ length: 13 }).map(
    (_, i) => `/customers/${i + 1}.jpeg`,
  );
  const firstRow = images.slice(0, 7);
  const secondRow = images.slice(7);
  return (
    <Section {...props}>
      <SectionHeader>
        <SectionTitle>{t('title')}</SectionTitle>
        <SectionDescription>{t('description')}</SectionDescription>
      </SectionHeader>
      <SectionContent className="gap-2 p-0" dir="ltr">
        <Marquee className="[--duration:20s]">
          {firstRow.map((_, i) => (
            <Image
              src={`/clients/${i + 1}.jpeg`}
              alt={`Client ${i + 1}`}
              sizes="100vw"
              width={500}
              height={300}
              className="h-20 w-auto rounded-lg"
              key={i}
            />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:20s]">
          {secondRow.map((_, i) => (
            <Image
              src={`/clients/${i + 8}.jpeg`}
              alt={`Client ${i + 8}`}
              sizes="100vw"
              width={500}
              height={300}
              className="h-20 w-auto rounded-lg"
              key={i}
            />
          ))}
        </Marquee>
      </SectionContent>
    </Section>
  );
};

export default OurClientsSection;
