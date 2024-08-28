import CustomIframe, {
  CustomIframeContent,
  CustomIframePlaceholder,
} from '@/components/custom-iframe';
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/layouts/section';
import BlurFade from '@/components/magicui/blur-fade';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { getLangFromHeaders } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import Image from 'next/image';
import React, { FC } from 'react';

const projects: { title: string; url: string }[] = [
  {
    title: 'wds',
    url: 'https://player.vimeo.com/video/997666773?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
  {
    title: 'MTARAT',
    url: 'https://player.vimeo.com/video/997669454?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
  {
    title: 'REL Dynamic',
    url: 'https://player.vimeo.com/video/997669496?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
  {
    title: 'Children of Culture Event',
    url: 'https://player.vimeo.com/video/997668648?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
  {
    title: 'noon',
    url: 'https://player.vimeo.com/video/997477629?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
  {
    title: 'JTM',
    url: 'https://player.vimeo.com/video/997477608?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
  {
    title: 'bmm rr',
    url: 'https://player.vimeo.com/video/997477562?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
  {
    title: 'WAK',
    url: 'https://player.vimeo.com/video/997476805?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
];

const ProjectsSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  const lang = getLangFromHeaders(headers);
  unstable_setRequestLocale(lang);
  const t = useTranslations('HomePage.content.projects');

  return (
    <Section {...props}>
      <SectionHeader>
        <SectionTitle>{t('title')}</SectionTitle>
        <SectionDescription>{t('description')}</SectionDescription>
      </SectionHeader>
      <SectionContent dir="ltr">
        <div className="columns-1 gap-4 sm:columns-3">
          {projects.map(({ title, url }, idx) => (
            <Dialog key={title}>
              <DialogTrigger className="size-full">
                <BlurFade key={title} delay={0.25 + idx * 0.05} inView>
                  <Image
                    src={`/assets/images/thumbnails/${title}.webp`}
                    sizes="100vw"
                    width={500}
                    height={500}
                    className="mb-4 size-full rounded-lg object-contain"
                    alt=""
                  />
                </BlurFade>
              </DialogTrigger>
              <DialogContent className="max-w-[90%] md:max-w-[80%] lg:h-[80svh]">
                <CustomIframe className="my-4 lg:m-0 lg:size-full">
                  <CustomIframePlaceholder />
                  <CustomIframeContent allowFullScreen src={url} />
                </CustomIframe>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};

export default ProjectsSection;
