import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionContent,
} from '@/components/layouts/section';
import React, { FC } from 'react';

const ServicesSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  return (
    <Section {...props}>
      <SectionHeader className="mx-auto md:max-w-sm">
        <SectionTitle className="text-3xl font-bold leading-none">
          Our Services
        </SectionTitle>
        <SectionDescription>
          Explore the range of services we offer
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="mt-6"></SectionContent>
    </Section>
  );
};

export default ServicesSection;
