/* eslint-disable max-len */
import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/Providers/StoreProvider';

import { UserRoles } from '../../types/userSchema';

export const getUserRoles = (state: StateSchema) => state.user.authData?.role;
export const isUserAdmin = createSelector(getUserRoles, (roles) => roles?.includes(UserRoles.ADMIN));
export const isUserManager = createSelector(getUserRoles, (roles) => roles?.includes(UserRoles.MANAGER));
