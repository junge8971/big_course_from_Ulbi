import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconComponentProps {
  className?: string;
  inverted?: boolean;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

const IconComponent: FC<IconComponentProps> = ({ className, Svg, inverted }) => {
  return (
    <Svg className={classNames(cls.Icon, [className], { [cls.inverted]: inverted })} />
  );
};

export const Icon = memo(IconComponent);
