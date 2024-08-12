import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/layouts/section';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getLangFromHeaders } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import Image from 'next/image';
import React, { FC } from 'react';

const ServicesSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  const lang = getLangFromHeaders(headers);
  unstable_setRequestLocale(lang);
  const t = useTranslations('HomePage.sections.services');
  const services = [
    {
      key: 'photography',
      image: 'photography.webp',
      details: [
        'commercial_photography',
        'photography_documentary',
        'locations_aerial',
      ],
    },
    {
      key: 'advertising_campaigns',
      image: 'advertising.webp',
      details: [
        'building_strategies',
        'business_marketing_plan',
        'production_implementation',
      ],
    },
    {
      key: 'event_management',
      image: 'events.webp',
      details: [
        'music_concerts',
        'creating_ideas_plants',
        'festivals_heritage',
      ],
    },
  ];
  return (
    <Section {...props}>
      <SectionHeader className="mx-auto md:max-w-sm">
        <SectionTitle className="text-3xl font-bold leading-none">
          {t('title')}
        </SectionTitle>
        <SectionDescription>{t('description')}</SectionDescription>
      </SectionHeader>
      <SectionContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ image, key, details }, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="relative h-[300px] w-full rounded-lg">
                <Image
                  src={`/services/${image}`}
                  fill
                  alt={t(`services.${key}.title`)}
                  className="absolute rounded-[inherit] object-cover"
                />
              </div>
              <CardTitle className="text-xl">
                {t(`services.${key}.title`)}
              </CardTitle>
              <CardDescription>
                {t(`services.${key}.description`)}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-md text-muted-foreground">
              <ul className="list-disc px-6">
                {details.map((detail, index) => (
                  <li key={index}>{t(`services.${key}.details.${detail}`)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </SectionContent>
    </Section>
  );
};

export default ServicesSection;
