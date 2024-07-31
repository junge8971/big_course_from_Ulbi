import { FC, lazy } from 'react';

import { LoginFormComponentProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormComponentProps>>(() => import('./LoginForm'));
