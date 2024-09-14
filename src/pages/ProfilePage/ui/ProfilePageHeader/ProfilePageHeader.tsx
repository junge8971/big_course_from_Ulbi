import {
  getProfileData,
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from 'entity/Profile';
import { getUserAuthData } from 'entity/User';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Text } from 'shared/ui/Text/Text';

const ProfilePageHeaderComponent: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const readOnly = useSelector(getProfileReadOnly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);
  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);
  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack max justify="between">
      <Text title={t('Профиль')} />
      {canEdit
        && (readOnly ? (
          <Button onClick={onEdit} theme={ButtonTheme.outline}>
            {t('Редактировать')}
          </Button>
        ) : (
          <HStack gap="8">
            <Button onClick={onCancelEdit} theme={ButtonTheme.outlineRed}>
              {t('Отменить')}
            </Button>
            <Button onClick={onSave} theme={ButtonTheme.outline}>
              {t('Сохранить')}
            </Button>
          </HStack>
        ))}
    </HStack>
  );
};

export const ProfilePageHeader = memo(ProfilePageHeaderComponent);
