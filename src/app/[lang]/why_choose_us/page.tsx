import {
    Section,
    SectionContent,
    SectionDescription,
    SectionHeader,
    SectionTitle,
} from '@/components/layouts/section';
import {
    ChartIcon,
    EquipmentIcon,
    HeartIcon,
    PeopleIcon,
    WorkIcon,
} from '@/components/shared/icons';
import { Clock } from 'lucide-react';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: lang,
    namespace: 'WhyChooseUsPage',
  });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

const WhyChooseUs = ({ params: { lang } }: { params: { lang: string } }) => {
  unstable_setRequestLocale(lang);
  const t = useTranslations('WhyChooseUsPage');
  const content = [
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
    <Section>
      <SectionHeader>
        <SectionTitle>{t('metadata.title')}</SectionTitle>
        <SectionDescription>{t('metadata.description')}</SectionDescription>
      </SectionHeader>
      <SectionContent className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {content.map(({ key, icon: Icon }, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 rounded-lg bg-accent px-4 py-10 text-center"
          >
            <Icon size={40} />
            <h3 className="text-xl font-bold">
              <span className="mx-1">{t(`content.${key}.title`)}</span>
            </h3>
            <p className="px-4 text-muted-foreground">
              {t(`content.${key}.description`)}
            </p>
          </div>
        ))}
      </SectionContent>
    </Section>
  );
};

export default WhyChooseUs;
