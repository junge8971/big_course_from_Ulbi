import { FC, memo } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";

import cls from "./Navbar.module.scss";

interface NavbarComponentProps {
  className?: string;
}

const NavbarComponent: FC<NavbarComponentProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, [className], {})}>
      <div className={cls.links}>
        <AppLink to={RoutePath.main}>Главная</AppLink>
        <AppLink to={RoutePath.about}>О нас</AppLink>
      </div>
    </div>
  );
};

export const Navbar = memo(NavbarComponent);
