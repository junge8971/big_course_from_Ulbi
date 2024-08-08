import { getProfileReadOnly, profileActions, updateProfileData } from 'entity/Profile';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import cls from './ProfilePageHeader.module.scss';

const ProfilePageHeaderComponent: FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const readOnly = useSelector(getProfileReadOnly);

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
    <div className={classNames(cls.profilePageHeader)}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        {readOnly ? (
          <Button onClick={onEdit} className={cls.editButton} theme={ButtonTheme.outline}>
            {t('Редактировать')}
          </Button>
        ) : (
          <>
            <Button
              onClick={onCancelEdit}
              className={cls.editButton}
              theme={ButtonTheme.outlineRed}
            >
              {t('Отменить')}
            </Button>
            <Button onClick={onSave} className={cls.saveButton} theme={ButtonTheme.outline}>
              {t('Сохранить')}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export const ProfilePageHeader = memo(ProfilePageHeaderComponent);
