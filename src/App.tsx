import "./index.scss";

import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Counter from "./components/Counter";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

export const App: FC = () => {
  return (
    <div className="app">
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
