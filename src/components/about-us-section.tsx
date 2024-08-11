import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionContent,
} from '@/components/layouts/section';
import React, { FC } from 'react';

const AboutUsSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  return (
    <Section {...props}>
      <SectionHeader className="mx-auto md:max-w-sm">
        <SectionTitle className="text-3xl font-bold leading-none">
          About Us
        </SectionTitle>
      </SectionHeader>
      <SectionContent className="mt-6 text-center">
        <p className="mx-auto text-lg text-muted-foreground md:w-[70%]">
          Over a decade of work based on quality and a passion for success,
          Dynamic Foundation was able to make a mark for itself as a house for
          audio-visual production in the region in general, and in particular,
          in which it cooperated with the strongest governmental and private
          brands and created a Saudi team of the highest level of
          professionalism.
        </p>
      </SectionContent>
    </Section>
  );
};

export default AboutUsSection;
