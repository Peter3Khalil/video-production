import CustomIframe, {
  CustomIframePlaceholder,
  CustomIframeContent,
} from '@/components/custom-iframe';
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionContent,
} from '@/components/layouts/section';
import { getLangFromHeaders } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import React, { FC } from 'react';

const ProjectsSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  const lang = getLangFromHeaders(headers);
  unstable_setRequestLocale(lang);
  const t = useTranslations('HomePage.sections.projects');
  const projects = [
    'https://player.vimeo.com/video/997477629?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    'https://player.vimeo.com/video/997477608?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    'https://player.vimeo.com/video/997477562?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    'https://player.vimeo.com/video/997476805?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    'https://player.vimeo.com/video/995964427?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  ];

  return (
    <Section {...props}>
      <SectionHeader>
        <SectionTitle className="text-3xl font-bold leading-none">
          {t('title')}
        </SectionTitle>
        <SectionDescription>{t('description')}</SectionDescription>
      </SectionHeader>
      <SectionContent className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <CustomIframe
            key={index}
            className="h-[250px] w-full rounded-[inherit]"
          >
            <CustomIframePlaceholder />
            <CustomIframeContent
              className="rounded-[inherit]"
              allowFullScreen
              src={project}
            />
          </CustomIframe>
        ))}
      </SectionContent>
    </Section>
  );
};

export default ProjectsSection;
