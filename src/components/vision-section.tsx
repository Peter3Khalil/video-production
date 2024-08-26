import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionContent,
  SectionDescription,
} from '@/components/layouts/section';
import { cn, getLangFromHeaders } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import Image from 'next/image';
import React, { FC } from 'react';

const VisionSection: FC<React.ComponentProps<typeof Section>> = (props) => {
  const lang = getLangFromHeaders(headers);
  unstable_setRequestLocale(lang);
  const t = useTranslations('HomePage.sections.vision');
  const visions = [0, 3].map((v, i) => {
    return {
      content: Array.from({ length: 3 }).map((_, j) => ({
        subtitle: t(`details.${v + j}.subtitle`),
        content: t(`details.${v + j}.content`),
      })),
      image: `/vision-${i + 1}.webp`,
    };
  });
  return (
    <Section {...props}>
      <SectionHeader>
        <SectionTitle>{t('title')}</SectionTitle>
        <SectionDescription>{t('description')}</SectionDescription>
      </SectionHeader>
      <SectionContent className="mt-12 gap-20">
        {visions.map((v, i) => (
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
      <div className="relative h-[40vh] w-full md:aspect-square md:h-[50vh] md:max-w-[50%]">
        <Image
          src={image}
          alt="Vision Image"
          fill
          className="absolute rounded-lg object-cover object-center"
        />
      </div>
      <article className="flex-1 space-y-4">
        {content.map(({ subtitle, content }, i) => (
          <div key={i}>
            <h4 className="text-xl font-semibold capitalize">{subtitle}</h4>
            <p className="text-sm text-muted-foreground">{content}</p>
          </div>
        ))}
      </article>
    </div>
  );
};

export default VisionSection;
