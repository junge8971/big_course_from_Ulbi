import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface LoginFormComponentProps {
  className?: string;
}

const LoginFormComponent: FC<LoginFormComponentProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, [className])}>
      <Input autoFocus placeholder={t('Логин')} />
      <Input placeholder={t('Пароль')} />
      <Button className={cls.loginButton}>{t('Войти')}</Button>
    </div>
  );
};

export const LoginForm = memo(LoginFormComponent);
