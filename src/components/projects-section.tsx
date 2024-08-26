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
    'https://player.vimeo.com/video/997669454?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    'https://player.vimeo.com/video/997669496?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    'https://player.vimeo.com/video/997668648?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    'https://player.vimeo.com/video/997666773?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    'https://player.vimeo.com/video/997477629?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    'https://player.vimeo.com/video/997477608?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    'https://player.vimeo.com/video/997477562?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    'https://player.vimeo.com/video/997476805?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    'https://player.vimeo.com/video/995964427?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  ];

  return (
    <Section {...props}>
      <SectionHeader>
        <SectionTitle>{t('title')}</SectionTitle>
        <SectionDescription>{t('description')}</SectionDescription>
      </SectionHeader>
      <SectionContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <CustomIframe
            key={index}
            className="aspect-video h-[200px] w-full rounded-lg md:aspect-auto md:h-[250px]"
          >
            <CustomIframePlaceholder />
            <CustomIframeContent
              className="rounded-[inherit]"
              allowFullScreen
              src={project}
              title={`Project ${index + 1}`}
            />
          </CustomIframe>
        ))}
      </SectionContent>
    </Section>
  );
};

export default ProjectsSection;
