import { useAppDispatch } from 'app/Providers/StoreProvider';
import { getUserAuthData, userActions } from 'entity/User';
import { LoginModal } from 'features/AuthByUsername';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

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
      <div className={classNames(cls.navbar, [className], {})}>
        <div className={cls.links}>
          <Button theme={ButtonTheme.outline} onClick={logout}>
            {t('Выйти')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, [className], {})}>
      <div className={cls.links}>
        <Button theme={ButtonTheme.outline} onClick={openModal}>
          {t('Войти')}
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={closeModal} />
        <Button>{t('Зарегестрироватся')}</Button>
      </div>
    </div>
  );
};

export const Navbar = memo(NavbarComponent);
