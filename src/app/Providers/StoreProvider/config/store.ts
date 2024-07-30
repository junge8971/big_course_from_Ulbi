import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';
import { loginReducer } from 'features/AuthByUsername';

import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: { counter: counterReducer, user: userReducer, login: loginReducer },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
