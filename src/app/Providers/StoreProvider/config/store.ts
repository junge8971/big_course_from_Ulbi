import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';
import { NavigateOptions, To } from 'react-router-dom';
import { $api } from 'shared/api/api';

import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: Partial<ReducersMapObject<StateSchema>>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,

    counter: counterReducer,
    user: userReducer,
  };
  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};
