import { getUserAuthData } from 'entity/User';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Text } from 'shared/ui/Text/Text';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderComponentProps {
  className?: string;
}

const EditableProfileCardHeaderComponent: FC<EditableProfileCardHeaderComponentProps> = ({
  className,
}) => {
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
    <HStack className={className} max justify="between">
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

export const EditableProfileCardHeader = memo(EditableProfileCardHeaderComponent);
