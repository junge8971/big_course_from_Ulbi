import { Counter } from 'entity/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t('Главная')}
      <div>
        <Counter />
      </div>
    </div>
  );
};
export default MainPage;
