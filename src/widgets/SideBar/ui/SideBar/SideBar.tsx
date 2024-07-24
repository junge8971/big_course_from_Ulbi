import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import cls from './SideBar.module.scss';

export enum buttonType {
  button = 'button',
  reset = 'reset',
  submit = 'submit',
}

interface SideBarComponentProps {
  className?: string;
  type?: buttonType;
}

const SideBarComponent: FC<SideBarComponentProps> = ({
  className,
  type = buttonType.button,
}) => {
  const [sideBarOpenStatus, setSideBarOpenStatus] = useState(false);
  const { t } = useTranslation();

  const toggleSidebar = () => setSideBarOpenStatus((prev) => !prev);

  return (
    <div
      className={classNames(cls.sideBar, [className], {
        [cls.open]: sideBarOpenStatus,
      })}
    >
      <button type={type} onClick={toggleSidebar}>
        {t('дерг')}
      </button>
      <div className={cls.switches}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

export const SideBar = memo(SideBarComponent);
