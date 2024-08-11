import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionContent,
} from '@/components/layouts/section';
import React, { FC } from 'react';

const VisionSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  const vision = [
    {
      title: 'Providing Value',
      content:
        'We seek to provide innovative, high-quality solutions and services that add real value to our customers and effectively meet their needs.',
    },
    {
      title: 'Sustainability',
      content:
        'We are committed to social and environmental responsibility, and are working to develop our practices to be more sustainable and have a positive impact on the environment.',
    },
    {
      title: 'Innovation and Development',
      content:
        'We strive for continuous innovation and development. We support new ideas and work to develop our technologies and processes to achieve excellence and continuous innovation.',
    },
    {
      title: 'Building Strong Relationships',
      content:
        'We seek to build lasting and strong relationships with our customers and partners, built on trust, mutual respect, and close cooperation.',
    },
    {
      title: 'Sustainable Growth',
      content:
        'We aspire to sustainable growth and expansion into new markets, while maintaining quality service and positive interaction with society.',
    },
    {
      title: 'Our Vision',
      content:
        'Our vision is to be a reputable company with a global reputation, distinguished by innovation and excellence in our field, and actively contributing to the development of the industry and achieving progress and sustainability in the communities we serve.',
    },
  ];
  return (
    <Section {...props}>
      <SectionHeader className="mx-auto md:max-w-sm">
        <SectionTitle className="text-3xl font-bold leading-none">
          Vision
        </SectionTitle>
      </SectionHeader>
      <SectionContent className="mt-6 text-center">
        <div className="mx-auto space-y-4 text-lg text-muted-foreground md:w-[70%]">
          {vision.map((v, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold">{v.title}</h3>
              <p>{v.content}</p>
            </div>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};

export default VisionSection;
