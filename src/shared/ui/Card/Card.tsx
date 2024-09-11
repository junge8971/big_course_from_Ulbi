import {
  FC, HTMLAttributes, ReactNode, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINE = 'outline',
}

interface CardComponentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  theme?: CardTheme;
  children: ReactNode;
}

const CardComponent: FC<CardComponentProps> = ({
  className,
  children,
  theme,
  ...props
}) => {
  return (
    <div className={classNames(cls.card, [className, cls[theme]])} {...props}>
      {children}
    </div>
  );
};

export const Card = memo(CardComponent);
