import {
  ButtonHTMLAttributes, FC, ReactNode, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  clear = 'clear',
  outline = 'outline',
  background = 'backgroundInverted',
  backgroundInverted = 'backgroundInverted',
}

export enum ButtonSize {
  m = 'size_m',
  l = 'size_l',
  xl = 'size_xl',
}

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

const ButtonComponent: FC<ButtonComponentProps> = ({
  className,
  children,
  theme,
  square,
  size,
  ...props
}) => (
  <button
    className={classNames(cls.button, [className, cls[theme]], {
      [cls.square]: square,
      [cls[size]]: size,
    })}
    {...props}
  >
    {children}
  </button>
);

export const Button = memo(ButtonComponent);
