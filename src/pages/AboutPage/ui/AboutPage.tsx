import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const AboutPage: FC = () => {
  const { t } = useTranslation();
  return <PageWrapper>{t('О нас')}</PageWrapper>;
};

export default AboutPage;
