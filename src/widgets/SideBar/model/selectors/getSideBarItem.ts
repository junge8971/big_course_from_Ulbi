import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entity/User';
import AboutPageIcon from 'shared/assets/icons/aboutPageIcon.svg';
import ArticlesPageIcon from 'shared/assets/icons/article-20-20.svg';
import MainPageIcon from 'shared/assets/icons/homePageIcon.svg';
import ProfilePageIcon from 'shared/assets/icons/profilePageIcon.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { SideBarItemType } from '../types/sideBar';

export const getSideBarItem = createSelector(getUserAuthData, (userData) => {
  const sideBarItemsList: SideBarItemType[] = [
    { path: RoutePath.main, text: 'Главная', Icon: MainPageIcon },
    { path: RoutePath.about, text: 'О нас', Icon: AboutPageIcon },
  ];
  if (userData) {
    sideBarItemsList.push(
      {
        path: RoutePath.profile + userData.id,
        text: 'Профиль',
        Icon: ProfilePageIcon,
        authOnly: true,
      },
      { path: RoutePath.articles, text: 'Статьи', Icon: ArticlesPageIcon },
    );
  }

  return sideBarItemsList;
});
