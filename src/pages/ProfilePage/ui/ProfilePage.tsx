import { profileReducer } from 'entity/Profile';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import cls from './ProfilePage.module.scss';

const reducers: ReducersList = { profile: profileReducer };

interface ProfilePageComponentProps {
  className?: string;
}

const ProfilePageComponent: FC<ProfilePageComponentProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.profilePage, [className])}>{t('Профиль пользователя')}</div>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePageComponent);
