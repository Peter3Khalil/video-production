import withSplashScreen from '@/components/HOC/withSplashScreen';
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/layouts/section';
import { getLangFromHeaders } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';

const VisionPage = () => {
  const lang = getLangFromHeaders(headers);
  unstable_setRequestLocale(lang);
  const t = useTranslations('HomePage.sections.vision');
  const visions = Array.from({ length: 6 }).map((_, i) => ({
    subtitle: t(`details.${i}.subtitle`),
    content: t(`details.${i}.content`),
  }));
  return (
    <Section>
      <SectionHeader className="max-w-xl md:max-w-xl">
        <SectionTitle>{t('title')}</SectionTitle>
        <SectionDescription>{t('description')}</SectionDescription>
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

export default withSplashScreen(VisionPage);
