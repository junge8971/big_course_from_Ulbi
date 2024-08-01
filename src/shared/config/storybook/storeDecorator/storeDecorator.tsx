import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react/*';
import { StoreProvider } from 'app/Providers/StoreProvider';
import { StateSchema } from 'app/Providers/StoreProvider/config/StateSchema';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
  login: loginReducer,
};

// eslint-disable-next-line max-len
export const storeDecorator = (initialState: StateSchema, asyncReducers?: Partial<ReducersMapObject<StateSchema>>) => (Story: StoryFn) => {
  return (
    <StoreProvider
      initialState={initialState}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );
};
