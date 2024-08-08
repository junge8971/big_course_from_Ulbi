import { getUserAuthData } from 'entity/User';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import { SideBarItemType } from '../../model/items';
import cls from './SideBarItem.module.scss';

interface SideBarItemComponentProps {
  item: SideBarItemType;
  isOpen: boolean;
}

const SideBarItemComponent: FC<SideBarItemComponentProps> = ({ item, isOpen }) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }
  return (
    <AppLink className={classNames(cls.item, [], { [cls.open]: isOpen })} to={item.path}>
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
};

export const SideBarItem = memo(SideBarItemComponent);
