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
import React, { FC } from 'react';

const ProjectsSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  return (
    <Section {...props}>
      <SectionHeader>
        <SectionTitle className="text-3xl font-bold leading-none">
          Our Projects
        </SectionTitle>
        <SectionDescription>
          Check out some of our recent projects.
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <CustomIframe
            key={index}
            className="h-[250px] w-full rounded-[inherit]"
          >
            <CustomIframePlaceholder />
            <CustomIframeContent
              className="rounded-[inherit]"
              allowFullScreen
              src="https://player.vimeo.com/video/997116246?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            />
          </CustomIframe>
        ))}
      </SectionContent>
    </Section>
  );
};

export default ProjectsSection;
