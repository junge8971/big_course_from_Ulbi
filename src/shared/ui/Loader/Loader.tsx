import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Loader.module.scss';

interface LoaderComponentProps {
  className?: string;
}

const LoaderComponent: FC<LoaderComponentProps> = ({ className }) => {
  return (
    <div className={classNames(cls.wrapper, [className])}>
      <div className={cls.loader} />
    </div>
  );
};

export const Loader = memo(LoaderComponent);
