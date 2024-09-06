import {
  FC, HTMLAttributes, ReactNode, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';

interface CardComponentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const CardComponent: FC<CardComponentProps> = ({ className, children, ...props }) => {
  return (
    <div className={classNames(cls.card, [className])} {...props}>
      {children}
    </div>
  );
};

export const Card = memo(CardComponent);
