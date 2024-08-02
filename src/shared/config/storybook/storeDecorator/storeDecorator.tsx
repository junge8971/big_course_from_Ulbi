import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react/*';
import { StoreProvider } from 'app/Providers/StoreProvider';
import { StateSchema } from 'app/Providers/StoreProvider/config/StateSchema';
import { profileReducer } from 'entity/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
  login: loginReducer,
  profile: profileReducer,
};

// eslint-disable-next-line max-len
export const storeDecorator = (initialState?: Partial<StateSchema>, asyncReducers?: Partial<ReducersMapObject<StateSchema>>) => (Story: StoryFn) => {
  return (
    <StoreProvider
      initialState={initialState as StateSchema}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );
};
