import { ReducersMapObject } from '@reduxjs/toolkit';
import { FC, ReactNode, memo } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderComponentProps {
  children: ReactNode;
  initialState?: StateSchema;
  asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}

const StoreProviderComponent: FC<StoreProviderComponentProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const store = createReduxStore(initialState, asyncReducers);

  return <Provider store={store}>{children}</Provider>;
};

export const StoreProvider = memo(StoreProviderComponent);
