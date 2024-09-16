import { UserRoles } from 'entity/User';
import { AboutPage } from 'pages/AboutPage';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ForbiddenPage } from 'pages/ForbiddenPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRoles[];
};

export enum AppRoutes {
  main = 'main',
  about = 'about',
  profile = 'profile',
  articles = 'articles',
  articleDetails = 'articleDetails',
  articleCreate = 'articleCreate',
  articleEdit = 'articleEdit',
  adminPanel = 'adminPanel',

  forbidden = 'forbidden',

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
  [AppRoutes.adminPanel]: '/adminPanel',

  [AppRoutes.forbidden]: '/forbidden',

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
    path: RoutePath.articleEdit,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.articleCreate]: {
    path: RoutePath.articleCreate,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.adminPanel]: {
    path: RoutePath.adminPanel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRoles.ADMIN, UserRoles.MANAGER],
  },

  [AppRoutes.forbidden]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
    authOnly: false,
  },

  // last
  [AppRoutes.notFound]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
