import { getUserAuthData, userActions } from 'entity/User';
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
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import cls from './Navbar.module.scss';

interface NavbarComponentProps {
  className?: string;
}

const NavbarComponent: FC<NavbarComponentProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

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
        <div className={cls.links}>
          <Button theme={ButtonTheme.outline} onClick={logout}>
            {t('Выйти')}
          </Button>
        </div>
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
