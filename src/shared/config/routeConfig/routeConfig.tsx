import { AboutPage } from 'pages/AboutPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  main = 'main',
  about = 'about',
  profile = 'profile',
  articles = 'articles',
  articleDetails = 'articleDetails',
  articleCreate = 'articleCreate',
  articleEdit = 'articleEdit',

  // lats
  notFound = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.main]: '/',
  [AppRoutes.about]: '/about',
  [AppRoutes.profile]: '/profile/', // + :id
  [AppRoutes.articles]: '/articles',
  [AppRoutes.articleDetails]: '/articles/', // + :id
  [AppRoutes.articleCreate]: '/articles/new',
  [AppRoutes.articleEdit]: '/articles/:id/edit',

  // last
  [AppRoutes.notFound]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.main]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.about]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.profile]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.articles]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.articleDetails]: {
    path: `${RoutePath.articleDetails}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.articleEdit]: {
    path: `${RoutePath.articleEdit}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.articleCreate]: {
    path: `${RoutePath.articleCreate}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },

  // last
  [AppRoutes.notFound]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
