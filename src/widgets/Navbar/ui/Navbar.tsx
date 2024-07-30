import { LoginModal } from 'features/AuthByUsername';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './Navbar.module.scss';

interface NavbarComponentProps {
  className?: string;
}

const NavbarComponent: FC<NavbarComponentProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const openModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

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
