import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage: FC<AdminPanelPageProps> = ({ className }) => {
  const { t } = useTranslation();
  return <PageWrapper>{t('Админка')}</PageWrapper>;
};
export default AdminPanelPage;
