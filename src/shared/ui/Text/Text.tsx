import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  primary = 'primary',
  inverted = 'inverted',
  error = 'error',
}
export enum TextAlign {
  right = 'right',
  left = 'left',
  center = 'center',
}

export enum TextSize {
  s = 'size_s',
  m = 'size_m',
  l = 'size_l',
}

interface TextComponentProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';
const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.s]: 'h3',
  [TextSize.m]: 'h2',
  [TextSize.l]: 'h1',
};

const TextComponent: FC<TextComponentProps> = ({
  className,
  title,
  text,
  theme = TextTheme.primary,
  align = TextAlign.left,
  size = TextSize.m,
}) => {
  const HeaderTag = mapSizeToHeaderTag[size];
  return (
    <div className={classNames(cls.Text, [className, cls[theme], cls[align], cls[size]])}>
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};

export const Text = memo(TextComponent);
