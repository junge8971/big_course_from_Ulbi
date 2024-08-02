import {
  Action, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterSchema } from 'entity/Counter';
import { profileSchema } from 'entity/Profile';
import { userSchema } from 'entity/User';
import { loginSchema } from 'features/AuthByUsername';

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
