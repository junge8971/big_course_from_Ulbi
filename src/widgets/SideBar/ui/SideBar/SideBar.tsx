import { FC, memo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

import cls from "./SideBar.module.scss";

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
      <button onClick={toggleSidebar}>дерг</button>
      <div className={cls.switches}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export const SideBar = memo(SideBarComponent);
