import {
  Section,
  SectionContent,
  SectionHeader,
} from '@/components/layouts/section';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: lang, namespace: 'AboutPage' });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

const About = ({ params: { lang } }: { params: { lang: string } }) => {
  unstable_setRequestLocale(lang);
  const t = useTranslations('AboutPage');
  return (
    <>
      <Section className="relative flex h-[40vh] flex-col items-center justify-center px-12 text-center md:h-[80vh]">
        <SectionHeader>
          <h1 className="text-nowrap tracking-widest text-2xl font-bold leading-none text-background dark:text-foreground md:text-5xl">
            {t('metadata.title')}
          </h1>
        </SectionHeader>
        <div className="hero-image absolute -z-10 h-full w-full lg:w-[80%]">
          <Image
            src="/assets/images/hero.webp"
            fill
            loading="eager"
            alt="Hero Image"
            className="absolute left-0 top-0 -z-10 size-full object-cover object-center"
          />
        </div>
      </Section>
      <Section>
        <SectionContent className="text-center text-lg">
          <p className="mx-auto text-muted-foreground md:w-[70%] md:max-w-lg">
            {t('metadata.description')}
          </p>
        </SectionContent>
      </Section>
    </>
  );
};

export default About;
