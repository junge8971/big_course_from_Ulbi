import { FC, ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkComponentProps extends LinkProps {
  children: ReactNode;
  className?: string;
  theme?: AppLinkTheme;
}

const AppLinkComponent: FC<AppLinkComponentProps> = ({
  className,
  theme = AppLinkTheme.PRIMARY,
  children,
  ...props
}) => (
  <Link className={classNames(cls.AppLink, [className], {})} {...props}>
    {children}
  </Link>
);

export const AppLink = memo(AppLinkComponent);
