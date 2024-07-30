import { useAppDispatch } from 'app/Providers/StoreProvider';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormComponentProps {
  className?: string;
}

const LoginFormComponent: FC<LoginFormComponentProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.loginForm, [className])}>
      <Text title={t('Вход')} />
      <Input autoFocus placeholder={t('Логин')} onChange={onChangeUsername} value={username} />
      <Input placeholder={t('Пароль')} onChange={onChangePassword} value={password} />
      <Button className={cls.loginButton} onClick={onLoginClick} disabled={isLoading}>
        {t('Войти')}
      </Button>
      <Text theme={TextTheme.error} text={t(error)} />
    </div>
  );
};

export const LoginForm = memo(LoginFormComponent);
