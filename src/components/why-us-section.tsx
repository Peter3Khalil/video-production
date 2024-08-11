import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionContent,
} from '@/components/layouts/section';
import {
  ChartIcon,
  EquipmentIcon,
  HeartIcon,
  PeopleIcon,
  WorkIcon,
} from '@/components/shared/icons';
import { Clock } from 'lucide-react';
import React, { FC } from 'react';

const WhyUsSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  const reasons = [
    {
      title: '24/7 Service',
      content:
        "We're available 24/7 to provide you with the best service and support.",
      icon: Clock,
    },
    {
      title: '80+ of Experience',
      content: 'We have over 80 years of experience in the industry.',
      icon: WorkIcon,
    },
    {
      title: '90% National Cadres',
      content: 'We have over 90% of national cadres in our team.',
      icon: PeopleIcon,
    },
    {
      title: '100+ Modern Equipment',
      content:
        'We have over 100 modern equipment to provide you with the best service.',
      icon: EquipmentIcon,
    },
    {
      title: '70+ Employees',
      content:
        'We have over 70 employees to provide you with the best service.',
      icon: ChartIcon,
    },
    {
      title: '50+ Partners',
      content: 'We have over 50 partners to provide you with the best service.',
      icon: HeartIcon,
    },
  ];
  return (
    <Section {...props}>
      <SectionHeader className="mx-auto md:max-w-sm">
        <SectionTitle className="text-3xl font-bold leading-none">
          Why Choose Us?
        </SectionTitle>
        <SectionDescription>
          We are a team of professionals who are dedicated to providing you with
          the best service and support.
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {reasons.map(({ content, icon: Icon, title }, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 rounded-lg bg-accent px-4 py-10 text-center"
          >
            <Icon size={40} />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="px-4 text-muted-foreground">{content}</p>
          </div>
        ))}
      </SectionContent>
    </Section>
  );
};

export default WhyUsSection;
