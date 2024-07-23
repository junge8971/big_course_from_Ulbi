import "./style/index.scss";

import { AppRouter } from "app/Providers/router";
import { useTheme } from "app/Providers/ThemeProvider";
import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar/ui/Navbar";

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", [theme], {})}>
      <button onClick={toggleTheme}>Сменить тему</button>

      <Navbar />
      <AppRouter />
    </div>
  );
};
