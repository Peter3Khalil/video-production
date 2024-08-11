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
    <Section {...props} className="px-12">
      <SectionHeader>
        <h1 className="text-3xl font-bold leading-none md:text-nowrap md:text-5xl">
          Inspire - Initiate - Dream
        </h1>
        <SectionDescription>
          We are committed to providing value to our customers and partners,
          through quality service, innovative solutions, and close cooperation
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
