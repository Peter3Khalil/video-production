import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionContent,
} from '@/components/layouts/section';
import { Clock } from 'lucide-react';
import React, { FC } from 'react';

const WhyUsSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  return (
    <Section {...props}>
      <SectionHeader className="mx-auto md:max-w-sm">
        <SectionTitle className="text-3xl font-bold leading-none">
          Why Choose Us?
        </SectionTitle>
        <SectionDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, eget
          nunc, amet, in. Nunc, eget nunc, amet, in
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 rounded-lg bg-accent px-4 py-10 text-center"
          >
            <Clock size={42} />
            <h3 className="text-xl font-bold">Quality</h3>
            <p className="px-4 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
            </p>
          </div>
        ))}
      </SectionContent>
    </Section>
  );
};

export default WhyUsSection;
