import "./style/index.scss";

import { AppRouter } from "app/Providers/router";
import { useTheme } from "app/Providers/ThemeProvider";
import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar/ui/Navbar";
import { SideBar } from "widgets/SideBar";

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", [theme], {})}>
      <Navbar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};
