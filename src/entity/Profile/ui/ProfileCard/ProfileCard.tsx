import { Country, CountrySelect } from 'entity/Country';
import { Currency, CurrencySelect } from 'entity/Currency';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardComponentProps {
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;

  readOnly?: boolean;
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
}

const ProfileCardComponent: FC<ProfileCardComponentProps> = ({
  onChangeFirstName,
  onChangeLastName,
  onChangeCity,
  onChangeAge,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
  className,
  data,
  isLoading = true,
  error,
  readOnly,
}) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <HStack
        max
        align="center"
        justify="center"
        className={classNames(cls.profile, [className, cls.loader])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        max
        align="center"
        justify="center"
        className={classNames(cls.profile, [className, cls.error])}
      >
        <Text
          align={TextAlign.center}
          theme={TextTheme.error}
          title={t('Произошла ошибка')}
          text={t('Попробуйте обновить страницу')}
        />
      </HStack>
    );
  }

  return (
    <VStack
      gap="16"
      max
      className={classNames(cls.profile, [className], { [cls.editing]: !readOnly })}
    >
      {data?.avatar && (
        <HStack max align="center" justify="center">
          <Avatar src={data?.avatar} alt={data?.username} />
        </HStack>
      )}
      <Input
        onChange={onChangeFirstName}
        value={data?.first}
        placeholder={t('Ваше имя')}
        className={cls.input}
        readOnly={readOnly}
      />
      <Input
        onChange={onChangeLastName}
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        className={cls.input}
        readOnly={readOnly}
      />
      <Input
        onChange={onChangeAge}
        value={data?.age}
        placeholder={t('Ваш возраст')}
        className={cls.input}
        readOnly={readOnly}
      />
      <Input
        onChange={onChangeCity}
        value={data?.city}
        placeholder={t('Ваш город')}
        className={cls.input}
        readOnly={readOnly}
      />
      <Input
        onChange={onChangeUsername}
        value={data?.username}
        placeholder={t('Ваш username')}
        className={cls.input}
        readOnly={readOnly}
      />
      <Input
        onChange={onChangeAvatar}
        value={data?.avatar}
        placeholder={t('Ваш аватар')}
        className={cls.input}
        readOnly={readOnly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readOnly={readOnly}
      />
      <CountrySelect
        className={cls.input}
        readOnly={readOnly}
        value={data?.country}
        onChange={onChangeCountry}
      />
    </VStack>
  );
};

export const ProfileCard = memo(ProfileCardComponent);
