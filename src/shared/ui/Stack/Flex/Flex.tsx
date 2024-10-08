import {
  DetailedHTMLProps, FC, HTMLAttributes, ReactNode,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
};
const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};
const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};
const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

type divProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends divProps {
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
  className?: string;
}

export const Flex: FC<FlexProps> = ({
  className,
  children,
  align = 'center',
  direction = 'row',
  justify = 'start',
  gap,
  max,
}) => {
  return (
    <div
      className={classNames(
        cls.flex,
        [
          className,
          justifyClasses[justify],
          alignClasses[align],
          directionClasses[direction],
          gap && gapClasses[gap],
        ],
        { [cls.max]: max },
      )}
    >
      {children}
    </div>
  );
};
