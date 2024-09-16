import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entity/User';
import { LoginModal } from 'features/AuthByUsername';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DropDown } from 'shared/ui/DropDown/DropDown';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import cls from './Navbar.module.scss';

interface NavbarComponentProps {
  className?: string;
}

const NavbarComponent: FC<NavbarComponentProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminPanelAvailable = isAdmin || isManager;

  const openModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const logout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.navbar, [className], {})}>
        <Text title={t('Заголовок')} className={cls.appName} theme={TextTheme.inverted} />
        <AppLink
          to={RoutePath.articleCreate}
          className={cls.createArticleButton}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Создать статью')}
        </AppLink>
        <DropDown
          className={cls.dropdown}
          label={<Avatar src={authData?.avatar} size={30} />}
          items={[
            ...(isAdminPanelAvailable
              ? [
                {
                  content: t('Админка'),
                  href: RoutePath.adminPanel,
                },
              ]
              : []),
            {
              content: t('Профиль'),
              href: RoutePath.profile + authData.id,
            },
            {
              content: t('Выйти'),
              onClick: logout,
            },
          ]}
        />
      </header>
    );
  }

  return (
    <header className={classNames(cls.navbar, [className], {})}>
      <Text title={t('Заголовок')} className={cls.appName} />
      <div className={cls.links}>
        <Button theme={ButtonTheme.outline} onClick={openModal}>
          {t('Войти')}
        </Button>
        {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={closeModal} />}
        <Button>{t('Зарегестрироватся')}</Button>
      </div>
    </header>
  );
};

export const Navbar = memo(NavbarComponent);
