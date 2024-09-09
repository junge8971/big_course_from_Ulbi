import { Counter } from 'entity/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const MainPage: FC = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      {t('Главная')}
      <div>
        <Counter />
      </div>
    </PageWrapper>
  );
};
export default MainPage;
