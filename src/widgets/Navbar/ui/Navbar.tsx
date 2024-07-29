import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import cls from './Navbar.module.scss';

interface NavbarComponentProps {
  className?: string;
}

const NavbarComponent: FC<NavbarComponentProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const toggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, [className], {})}>
      <div className={cls.links}>
        <Button theme={ButtonTheme.outline} onClick={toggleModal}>
          {t('Войти')}
        </Button>
        <Modal isOpen={isAuthModal} onClose={toggleModal}>
          {t('Войти')}
        </Modal>
        <Button>{t('Зарегестрироватся')}</Button>
      </div>
    </div>
  );
};

export const Navbar = memo(NavbarComponent);
