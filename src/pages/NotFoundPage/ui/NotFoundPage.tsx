import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageComponentProps {
  className?: string;
}

const NotFoundPageComponent: FC<NotFoundPageComponentProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.notFoundPage, [className])}>{t('Страница не найдена')}</div>
  );
};

export const NotFoundPage = memo(NotFoundPageComponent);
