import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cls from './ProfileCard.module.scss';

interface ProfileCardComponentProps {}

const ProfileCardComponent: FC<ProfileCardComponentProps> = () => {
  const { t } = useTranslation();

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.profile)}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button className={cls.editButton} theme={ButtonTheme.outline}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input value={data?.first} placeholder={t('Ваше имя')} className={cls.input} />
        <Input value={data?.lastname} placeholder={t('Ваша фамилия')} className={cls.input} />
      </div>
    </div>
  );
};

export const ProfileCard = memo(ProfileCardComponent);
