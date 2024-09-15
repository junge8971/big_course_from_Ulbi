import {
  Action, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { articleDetailsSchema } from 'entity/Article';
import { counterSchema } from 'entity/Counter';
import { userSchema } from 'entity/User';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { loginSchema } from 'features/AuthByUsername';
import { profileSchema } from 'features/EditableProfileCard';
import { UiSchema } from 'features/Ui';
import { articleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { articlesPageSchema } from 'pages/ArticlesPage';
import { rtkApi } from 'shared/api/rtkApi';

import { createReduxStore } from './store';

export interface StateSchema {
  counter: counterSchema;
  user: userSchema;
  ui: UiSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // async
  login?: loginSchema;
  profile?: profileSchema;
  articleDetails?: articleDetailsSchema;
  articleDetailsPage?: articleDetailsPageSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: articlesPageSchema;
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
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StateSchema;
}
