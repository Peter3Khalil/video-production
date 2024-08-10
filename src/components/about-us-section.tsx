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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          similique eaque labore quasi iste rem porro explicabo, dolores ut
          reiciendis sequi alias sint aperiam minima velit blanditiis quos nulla
          sit deleniti molestiae possimus a ratione voluptates! Obcaecati
          deleniti perferendis voluptatem accusantium nemo quibusdam ea
          molestias nesciunt, magni eum, distinctio libero cumque deserunt
          assumenda ab, sequi suscipit minima ex maiores sed.
        </p>
      </SectionContent>
    </Section>
  );
};

export default AboutUsSection;
