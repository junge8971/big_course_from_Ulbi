import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';
import { $api } from 'shared/api/api';

import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArgs } from './StateSchema';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,

    counter: counterReducer,
    user: userReducer,
  };
  const reducerManager = createReducerManager(rootReducers);

  const extraArgsForThunk: ThunkExtraArgs = {
    api: $api,
  };

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArgsForThunk,
        },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};
