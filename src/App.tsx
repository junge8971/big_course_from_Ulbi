import "./style/index.scss";

import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { classNames } from "./healpers/classNames";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", [theme], {})}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>

      <Suspense>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
