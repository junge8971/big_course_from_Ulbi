import { NotificationList } from 'entity/Notification';
import { getUserAuthData } from 'entity/User';
import { LoginModal } from 'features/AuthByUsername';
import { AvatarDropdown } from 'features/AvatarDropdown';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import NotificationsIcons from 'shared/assets/icons/notification-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { PopUp } from 'shared/ui/PopUp/PopUp';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import cls from './Navbar.module.scss';

interface NavbarComponentProps {
  className?: string;
}

const NavbarComponent: FC<NavbarComponentProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useSelector(getUserAuthData);

  const openModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

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
        <HStack gap="16" className={cls.actions}>
          <PopUp title={<Icon Svg={NotificationsIcons} inverted />}>
            <NotificationList className={cls.notifications} />
          </PopUp>
          <AvatarDropdown authData={authData} />
        </HStack>
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
