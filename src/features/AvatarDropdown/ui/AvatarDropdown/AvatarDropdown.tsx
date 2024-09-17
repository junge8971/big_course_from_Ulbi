import {
  User, isUserAdmin, isUserManager, userActions,
} from 'entity/User';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { DropDown } from 'shared/ui/DropDown/DropDown';

interface AvatarDropdownComponentProps {
  className?: string;
  authData: User;
}

const AvatarDropdownComponent: FC<AvatarDropdownComponentProps> = ({
  className,
  authData,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminPanelAvailable = isAdmin || isManager;

  const logout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <DropDown
      className={className}
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
  );
};

export const AvatarDropdown = memo(AvatarDropdownComponent);
