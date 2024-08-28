import withSplashScreen from '@/components/HOC/withSplashScreen';
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
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: lang, namespace: 'ServicesPage' });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

const Services = ({ params: { lang } }: { params: { lang: string } }) => {
  unstable_setRequestLocale(lang);
  const t = useTranslations('ServicesPage');
  const services = [
    {
      key: 'photography',
      image: 'photography.webp',
    },
    {
      key: 'advertising_campaigns',
      image: 'advertising.webp',
    },
    {
      key: 'event_management',
      image: 'events.webp',
    },
    {
      key: 'films',
      image: 'films.webp',
    },
  ];
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{t('metadata.title')}</SectionTitle>
        <SectionDescription>{t('metadata.description')}</SectionDescription>
      </SectionHeader>
      <SectionContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ image, key }, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="relative h-[200px] w-full rounded-lg md:h-[300px]">
                <Image
                  src={`/assets/images/services/${image}`}
                  fill
                  alt={t(`content.${key}.title`)}
                  className="absolute rounded-[inherit] object-cover"
                />
              </div>
              <CardTitle className="text-lg tracking-widest">
                {t(`content.${key}.title`)}
              </CardTitle>
              <CardDescription className="text-xs">
                {t(`content.${key}.description`)}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-md text-muted-foreground">
              <ul className="list-disc space-y-2 px-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <li key={index}>{t(`content.${key}.details.${i}`)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </SectionContent>
    </Section>
  );
};

export default withSplashScreen(Services);
