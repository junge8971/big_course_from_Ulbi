import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage: FC<ForbiddenPageProps> = ({ className }) => {
  const { t } = useTranslation();
  return <PageWrapper>{t('Нет прав')}</PageWrapper>;
};

export default ForbiddenPage;
