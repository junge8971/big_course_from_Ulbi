import { FC, memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import { SideBarItemsList } from '../../model/items';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import cls from './SideBar.module.scss';

interface SideBarComponentProps {
  className?: string;
}

const SideBarComponent: FC<SideBarComponentProps> = ({ className }) => {
  const [sideBarOpenStatus, setSideBarOpenStatus] = useState(false);

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
        {SideBarItemsList.map((item) => (
          <SideBarItem key={item.path} item={item} isOpen={sideBarOpenStatus} />
        ))}
      </div>

      <div className={cls.switches}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

export const SideBar = memo(SideBarComponent);
