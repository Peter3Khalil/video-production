import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionContent,
} from '@/components/layouts/section';
import {
  ChartIcon,
  EquipmentIcon,
  HeartIcon,
  PeopleIcon,
  WorkIcon,
} from '@/components/shared/icons';
import { getLangFromHeaders } from '@/lib/utils';
import { Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import React, { FC } from 'react';

const WhyUsSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  const lang = getLangFromHeaders(headers);
  unstable_setRequestLocale(lang);
  const t = useTranslations('HomePage.sections.why_choose_us');
  const reasons = [
    {
      key: '24_7_services',
      icon: Clock,
    },
    {
      key: '80_years_experience',
      icon: WorkIcon,
    },
    {
      key: '90_percent_national_cadres',
      icon: PeopleIcon,
    },
    {
      key: '100_modern_equipment',
      icon: EquipmentIcon,
    },
    {
      key: '70_employees',
      icon: ChartIcon,
    },
    {
      key: '50_partners',
      icon: HeartIcon,
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
      <SectionContent className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {reasons.map(({ key, icon: Icon }, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 rounded-lg bg-accent px-4 py-10 text-center"
          >
            <Icon size={40} />
            <h3 className="text-xl font-bold">{t(`reasons.${key}.title`)}</h3>
            <p className="px-4 text-muted-foreground">
              {t(`reasons.${key}.description`)}
            </p>
          </div>
        ))}
      </SectionContent>
    </Section>
  );
};

export default WhyUsSection;
