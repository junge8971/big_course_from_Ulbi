import { Reducer } from '@reduxjs/toolkit';
import {
  ReduxStoreWithReducerManager,
  StateSchemaKey,
  useAppDispatch,
} from 'app/Providers/StoreProvider';
import {
  FC, ReactNode, memo, useEffect,
} from 'react';
import { useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntries = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderComponentProps {
  children: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

const DynamicModuleLoaderComponent: FC<DynamicModuleLoaderComponentProps> = ({
  children,
  reducers,
  removeAfterUnmount,
}) => {
  const store = useStore() as ReduxStoreWithReducerManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntries) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    if (removeAfterUnmount) {
      return () => {
        Object.entries(reducers).forEach(([name]: ReducersListEntries) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@Demount ${name} reducer` });
        });
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export const DynamicModuleLoader = memo(DynamicModuleLoaderComponent);
