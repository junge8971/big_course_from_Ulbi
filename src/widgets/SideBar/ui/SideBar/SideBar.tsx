import { FC, memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

import cls from "./SideBar.module.scss";

interface SideBarComponentProps {
  className?: string;
}

const SideBarComponent: FC<SideBarComponentProps> = ({ className }) => {
  const [sideBarOpenStatus, setSideBarOpenStatus] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleSidebar = () => setSideBarOpenStatus((prev) => !prev);

  return (
    <div
      className={classNames(cls.sideBar, [className], {
        [cls.open]: sideBarOpenStatus,
      })}
    >
      <button onClick={toggleSidebar}>{t("дерг")}</button>
      <div className={cls.switches}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

export const SideBar = memo(SideBarComponent);
