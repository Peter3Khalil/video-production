import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

const Home = ({ params: { lang } }: { params: { lang: string } }) => {
  unstable_setRequestLocale(lang);
  const t = useTranslations('HomePage');
  return <h1>{t('title')}</h1>;
};

export default Home;
