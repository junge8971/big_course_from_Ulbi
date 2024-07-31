import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';

import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: Partial<ReducersMapObject<StateSchema>>,
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
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};
