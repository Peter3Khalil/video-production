import withSplashScreen from '@/components/HOC/withSplashScreen';
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/layouts/section';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: lang, namespace: 'VisionPage' });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

const Vision = ({ params: { lang } }: { params: { lang: string } }) => {
  unstable_setRequestLocale(lang);
  const t = useTranslations('VisionPage');
  const visions = Array.from({ length: 6 }).map((_, i) => ({
    subtitle: t(`content.${i}.subtitle`),
    content: t(`content.${i}.content`),
  }));
  return (
    <Section>
      <SectionHeader className="max-w-xl md:max-w-xl">
        <SectionTitle>{t('metadata.title')}</SectionTitle>
        <SectionDescription>{t('metadata.description')}</SectionDescription>
      </SectionHeader>
      <SectionContent className="mt-12 max-w-xl gap-20 p-0">
        <ul className="space-y-8">
          {visions.map(({ content, subtitle }, i) => (
            <li key={i}>
              <article>
                <h3 className="mb-2 text-lg font-medium capitalize">
                  {subtitle}
                </h3>
                <p className="text-xs text-muted-foreground">{content}</p>
              </article>
            </li>
          ))}
        </ul>
      </SectionContent>
    </Section>
  );
};

export default withSplashScreen(Vision);
