import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import cls from './ErrorPage.module.scss';

interface ErrorPageComponentProps {
  className?: string;
}

const ErrorPageComponent: FC<ErrorPageComponentProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={classNames(cls.errorPage, [className])}>
      <p>{t('Призошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Перезагрузить страницу')}</Button>
    </div>
  );
};

export const ErrorPage = memo(ErrorPageComponent);
