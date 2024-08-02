import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  main = 'main',
  about = 'about',
  profile = 'profile',

  // lats
  notFound = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.main]: '/',
  [AppRoutes.about]: '/about',
  [AppRoutes.profile]: '/profile',

  // last
  [AppRoutes.notFound]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.main]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.about]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.profile]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },

  // last
  [AppRoutes.notFound]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
