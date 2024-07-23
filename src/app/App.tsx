import "./style/index.scss";

import { AppRouter } from "app/Providers/router";
import { useTheme } from "app/Providers/ThemeProvider";
import { FC } from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", [theme], {})}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>

      <AppRouter />
    </div>
  );
};
