import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionContent,
} from '@/components/layouts/section';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { FC } from 'react';

const VisionSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  const vision: CardContent[] = [
    {
      title: 'Providing Value',
      content: [
        {
          subtitle: 'Our Mission',
          content:
            'We are committed to providing value to our customers and partners, through quality service, innovative solutions, and close cooperation.',
        },
        {
          subtitle: 'Our Mission',
          content:
            'We are committed to providing value to our customers and partners, through quality service, innovative solutions, and close cooperation.',
        },
      ],
      image: '/hero.webp',
    },
    {
      title: 'Providing Value',
      content: [
        {
          subtitle: 'Our Mission',
          content:
            'We are committed to providing value to our customers and partners, through quality service, innovative solutions, and close cooperation.',
        },
        {
          subtitle: 'Our Mission',
          content:
            'We are committed to providing value to our customers and partners, through quality service, innovative solutions, and close cooperation.',
        },
      ],
      image: '/hero.webp',
    },
    // {
    //   title: 'Sustainability',
    //   content:
    //     'We are committed to social and environmental responsibility, and are working to develop our practices to be more sustainable and have a positive impact on the environment.',
    // },
    // {
    //   title: 'Innovation and Development',
    //   content:
    //     'We strive for continuous innovation and development. We support new ideas and work to develop our technologies and processes to achieve excellence and continuous innovation.',
    // },
    // {
    //   title: 'Building Strong Relationships',
    //   content:
    //     'We seek to build lasting and strong relationships with our customers and partners, built on trust, mutual respect, and close cooperation.',
    // },
    // {
    //   title: 'Sustainable Growth',
    //   content:
    //     'We aspire to sustainable growth and expansion into new markets, while maintaining quality service and positive interaction with society.',
    // },
    // {
    //   title: 'Our Vision',
    //   content:
    //     'Our vision is to be a reputable company with a global reputation, distinguished by innovation and excellence in our field, and actively contributing to the development of the industry and achieving progress and sustainability in the communities we serve.',
    // },
  ];
  return (
    <Section {...props}>
      <SectionHeader className="mx-auto md:max-w-sm">
        <SectionTitle className="text-3xl font-bold leading-none">
          Vision
        </SectionTitle>
      </SectionHeader>
      <SectionContent className="mt-12 gap-20">
        {/* <p className="mx-auto space-y-4 text-lg text-muted-foreground md:w-[70%]">
          Our vision is to be a reputable company with a global reputation,
          distinguished by innovation and excellence in our field, and actively
          contributing to the development of the industry and achieving progress
          and sustainability in the communities we serve.
        </p> */}
        {vision.map((v, i) => (
          <VisionCard
            key={i}
            {...v}
            className={cn({
              'md:flex-row-reverse': i % 2 === 1,
            })}
          />
        ))}
      </SectionContent>
    </Section>
  );
};

type CardContent = {
  image: string;
  title: string;
  content: {
    subtitle: string;
    content: string;
  }[];
};
type VisionCardProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> &
  CardContent;

const VisionCard: FC<VisionCardProps> = ({
  content,
  image,
  title,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'mx-auto flex flex-col gap-4 md:flex-row md:gap-16 lg:w-[80%] lg:items-center lg:justify-between lg:gap-12',
        className,
      )}
      {...props}
    >
      <div className="relative min-h-[50vh] w-full md:max-w-[50%]">
        <Image
          src={image}
          alt={title}
          fill
          className="absolute rounded-lg object-cover"
        />
      </div>
      <article className="flex-1 space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        {content.map(({ subtitle, content }, i) => (
          <div key={i}>
            <h4 className="text-md font-semibold">{subtitle}</h4>
            <p className="text-sm text-muted-foreground">{content}</p>
          </div>
        ))}
      </article>
    </div>
  );
};

export default VisionSection;
