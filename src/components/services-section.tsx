import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/layouts/section';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import React, { FC } from 'react';

const ServicesSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  const services = [
    {
      title: 'Photography',
      image: 'photography.webp',
      description:
        'We provide professional photography services for all occasions.',
      details: [
        'Commercial Photography',
        'Photography and Documentary Coverage',
        'Locations and Aerial Photography',
      ],
    },
    {
      title: 'Advertising Campaigns',
      image: 'advertising.webp',
      description:
        'We help you create and run advertising campaigns to reach your target audience.',
      details: [
        'Building Strategies',
        'Business & Marketing Plan',
        'Production and Implementation',
      ],
    },
    {
      title: 'Event Management',
      image: 'events.webp',
      description:
        'We provide event management services for all types of events.',
      details: [
        'Music Concerts',
        'Creating Ideas for plants',
        'Festivals & Popular heritage',
      ],
    },
  ];
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
      <SectionContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ image, title, description, details }, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="relative h-[300px] w-full rounded-lg">
                <Image
                  src={`/services/${image}`}
                  fill
                  alt={title}
                  className="absolute rounded-[inherit] object-cover"
                />
              </div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="text-md text-muted-foreground">
              <ul className="list-disc px-6">
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </SectionContent>
    </Section>
  );
};

export default ServicesSection;
