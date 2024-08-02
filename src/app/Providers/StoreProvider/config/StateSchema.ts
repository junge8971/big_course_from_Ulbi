import {
  Action, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { counterSchema } from 'entity/Counter';
import { profileSchema } from 'entity/Profile';
import { userSchema } from 'entity/User';
import { loginSchema } from 'features/AuthByUsername';
import { NavigateOptions, To } from 'react-router-dom';

import { createReduxStore } from './store';

export interface StateSchema {
  counter: counterSchema;
  user: userSchema;

  // async
  login?: loginSchema;
  profile?: profileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithReducerManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export interface ThunkExtraArgs {
  api: AxiosInstance;
  navigate: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
}
