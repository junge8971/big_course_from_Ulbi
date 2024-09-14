import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
import {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  getValidateProfileError,
  profileActions,
  profileReducer,
} from 'entity/Profile';
import { ValidateProfileError } from 'entity/Profile/';
import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { regexForNumberInString } from 'shared/regex/common';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = { profile: profileReducer };

interface ProfilePageComponentProps {
  className?: string;
}

const ProfilePageComponent: FC<ProfilePageComponentProps> = ({ className }) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const fromData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadOnly);
  const validationErrors = useSelector(getValidateProfileError);

  const validationErrorsTranslation = {
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
    [ValidateProfileError.NO_DATA]: t('Нет данных профиля'),
    [ValidateProfileError.INCORRECT_PROFILE_DATA]: t('Профиль заполнен неправильно'),
    [ValidateProfileError.INCORRECT_PROFILE_COUNTY]: t('Страна заполнена неправильно'),
    [ValidateProfileError.INCORRECT_PROFILE_AGE]: t('Возраст указан неправильно'),
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      if (id) {
        dispatch(fetchProfileData(id));
      }
    }
  }, [dispatch, id]);

  const onChangeFirstName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ first: value }));
    },
    [dispatch],
  );
  const onChangeLastName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    },
    [dispatch],
  );
  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch],
  );
  const onChangeAge = useCallback(
    (value: string) => {
      if (regexForNumberInString.test(value)) {
        dispatch(profileActions.updateProfile({ age: Number(value || '0') }));
      }
    },
    [dispatch],
  );
  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch],
  );
  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch],
  );
  const onChangeCurrency = useCallback(
    (value: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch],
  );
  const onChangeCountry = useCallback(
    (value: Country) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <PageWrapper>
        <VStack gap="16" max>
          <ProfilePageHeader />
          {validationErrors?.length
            && validationErrors.map((error) => (
              <Text
                key={error}
                theme={TextTheme.error}
                text={validationErrorsTranslation[error]}
              />
            ))}
          <ProfileCard
            data={fromData}
            isLoading={isLoading}
            error={error}
            onChangeFirstName={onChangeFirstName}
            onChangeLastName={onChangeLastName}
            onChangeCity={onChangeCity}
            onChangeAge={onChangeAge}
            onChangeUsername={onChangeUsername}
            onChangeAvatar={onChangeAvatar}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
            readOnly={readOnly}
          />
        </VStack>
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePageComponent);
