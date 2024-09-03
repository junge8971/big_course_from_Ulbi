import { FunctionComponent, SVGAttributes } from 'react';
import AboutPageIcon from 'shared/assets/icons/aboutPageIcon.svg';
import ArticlesPageIcon from 'shared/assets/icons/article-20-20.svg';
import MainPageIcon from 'shared/assets/icons/homePageIcon.svg';
import ProfilePageIcon from 'shared/assets/icons/profilePageIcon.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SideBarItemType {
  path: string;
  text: string;
  Icon: FunctionComponent<SVGAttributes<SVGElement>>;
  authOnly?: boolean;
}

export const SideBarItemsList: SideBarItemType[] = [
  { path: RoutePath.main, text: 'Главная', Icon: MainPageIcon },
  { path: RoutePath.about, text: 'О нас', Icon: AboutPageIcon },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: ProfilePageIcon,
    authOnly: true,
  },
  { path: RoutePath.articles, text: 'Статьи', Icon: ArticlesPageIcon },
];
