import {
  ButtonHTMLAttributes, FC, ReactNode, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  clear = 'clear',
  outline = 'outline',
}

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ThemeButton;
}

const ButtonComponent: FC<ButtonComponentProps> = ({
  className, children, theme, ...props
}) => (
  <button className={classNames(cls.button, [className, cls[theme]], {})} {...props}>
    {children}
  </button>
);

export const Button = memo(ButtonComponent);
