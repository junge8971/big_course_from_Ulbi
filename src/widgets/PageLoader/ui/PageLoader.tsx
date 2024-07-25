import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './PageLoader.module.scss';

interface PageLoaderComponentProps {
  className?: string;
}

const PageLoaderComponent: FC<PageLoaderComponentProps> = ({ className }) => (
  <div className={classNames(cls.pageLoader, [className])}>
    <div className={cls.loader} />
  </div>
);

export const PageLoader = memo(PageLoaderComponent);
