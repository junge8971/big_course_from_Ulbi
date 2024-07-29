import { FC, ReactNode, memo } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderComponentProps {
  children: ReactNode;
  initialState?: StateSchema;
}

const StoreProviderComponent: FC<StoreProviderComponentProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};

export const StoreProvider = memo(StoreProviderComponent);
