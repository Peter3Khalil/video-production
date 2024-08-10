import {
  Section,
  SectionHeader,
  SectionDescription,
  SectionContent,
} from '@/components/layouts/section';
import Image from 'next/image';
import React, { FC } from 'react';

const HeroSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  return (
    <Section {...props}>
      <SectionHeader>
        <h1 className="text-5xl font-bold leading-none">
          Your Vision, Our Lens
        </h1>
        <SectionDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, eget
          nunc, amet, in. Nunc, eget nunc, amet, in
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="mt-6 lg:w-[80%]">
        <Image
          src="/hero.webp"
          width={560 * 1.5}
          height={560}
          loading="eager"
          alt="Hero Image"
          className="w-full rounded-lg"
        />
      </SectionContent>
    </Section>
  );
};

export default HeroSection;
