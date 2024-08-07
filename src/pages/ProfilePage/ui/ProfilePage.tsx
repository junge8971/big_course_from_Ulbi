import { ProfileCard, fetchProfileData, profileReducer } from 'entity/Profile';
import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import cls from './ProfilePage.module.scss';

const reducers: ReducersList = { profile: profileReducer };

interface ProfilePageComponentProps {
  className?: string;
}

const ProfilePageComponent: FC<ProfilePageComponentProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.profilePage, [className])}>{t('Профиль пользователя')}</div>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePageComponent);
