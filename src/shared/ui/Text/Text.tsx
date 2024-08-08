import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  primary = 'primary',
  error = 'error',
}
export enum TextAlign {
  right = 'right',
  left = 'left',
  center = 'center',
}

interface TextComponentProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

const TextComponent: FC<TextComponentProps> = ({
  className,
  title,
  text,
  theme = TextTheme.primary,
  align = TextAlign.left,
}) => {
  return (
    <div className={classNames(cls.Text, [className, cls[theme], cls[align]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};

export const Text = memo(TextComponent);
