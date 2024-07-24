import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface NavbarComponentProps {
  className?: string;
}

const NavbarComponent: FC<NavbarComponentProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={classNames(cls.navbar, [className], {})}>
      <div className={cls.links}>
        <AppLink to={RoutePath.main}>{t('Главная')}</AppLink>
        <AppLink to={RoutePath.about}>{t('О нас')}</AppLink>
      </div>
    </div>
  );
};

export const Navbar = memo(NavbarComponent);
