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
import { getLangFromHeaders } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';

const Contact: FC<React.ComponentProps<typeof Section>> = (props) => {
  const lang = getLangFromHeaders(headers);
  unstable_setRequestLocale(lang);
  const t = useTranslations('HomePage.sections.contact');

  return (
    <Section {...props}>
      <SectionHeader className="mx-auto md:max-w-sm">
        <SectionTitle className="px-12 md:text-nowrap">
          {t('title')}
        </SectionTitle>
        <SectionDescription className="px-12 md:p-0">
          {t('description')}
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="w-fit flex-row items-center justify-center gap-4">
        <Button asChild>
          <a
            href="mailto:admin@dynamicmediapro.com"
            className="flex items-center gap-2"
          >
            <MailIcon size={20} className="shrink-0" />
            {t('email')}
          </a>
        </Button>
        <Button variant={'secondary'} className="w-[110px]" asChild>
          <a href="tel:+966540003848" className="flex items-center gap-2">
            <PhoneIcon size={20} className="shrink-0" />
            {t('phone')}
          </a>
        </Button>
      </SectionContent>
    </Section>
  );
};

export default Contact;
