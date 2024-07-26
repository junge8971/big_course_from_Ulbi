import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutPageIcon from 'shared/assets/icons/aboutPageIcon.svg';
import MainPageIcon from 'shared/assets/icons/homePageIcon.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import cls from './SideBar.module.scss';

interface SideBarComponentProps {
  className?: string;
}

const SideBarComponent: FC<SideBarComponentProps> = ({ className }) => {
  const [sideBarOpenStatus, setSideBarOpenStatus] = useState(false);
  const { t } = useTranslation();

  const toggleSidebar = () => setSideBarOpenStatus((prev) => !prev);

  return (
    <div
      className={classNames(cls.sideBar, [className], {
        [cls.open]: sideBarOpenStatus,
      })}
    >
      <Button
        theme={ButtonTheme.backgroundInverted}
        onClick={toggleSidebar}
        className={cls.toggleButton}
        square
        size={ButtonSize.xl}
      >
        {sideBarOpenStatus ? '<' : '>'}
      </Button>

      <div className={cls.items}>
        <AppLink className={cls.item} to={RoutePath.main}>
          <MainPageIcon className={cls.icon} />
          <span className={cls.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink to={RoutePath.about} className={cls.item}>
          <AboutPageIcon className={cls.icon} />
          <span className={cls.link}>{t('О нас')}</span>
        </AppLink>
      </div>

      <div className={cls.switches}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

export const SideBar = memo(SideBarComponent);
