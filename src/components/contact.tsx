import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import { MailIcon, PhoneIcon } from '@/components/shared/icons';
import React, { FC } from 'react';

const Contact: FC<React.ComponentProps<typeof Section>> = (props) => {
  return (
    <Section {...props}>
      <SectionHeader className="mx-auto md:max-w-sm">
        <SectionTitle className="px-12 text-3xl font-bold md:text-nowrap">
          Let&apos;s Starting Build Your Vision
        </SectionTitle>
        <SectionDescription className="px-12 md:p-0">
          Get in touch with us for all your photography, advertising, and event
          management needs.
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="mx-auto flex w-fit flex-row items-center justify-center gap-4">
        <Button asChild>
          <a
            href="mailto:admin@dynamicmediapro.com"
            className="flex items-center gap-2"
          >
            <MailIcon size={20} className="shrink-0" />
            Email us
          </a>
        </Button>
        <Button variant={'secondary'} className="w-[110px]" asChild>
          <a href="tel:+966540003848" className="flex items-center gap-2">
            <PhoneIcon size={20} className="shrink-0" />
            Call us
          </a>
        </Button>
      </SectionContent>
    </Section>
  );
};

export default Contact;
