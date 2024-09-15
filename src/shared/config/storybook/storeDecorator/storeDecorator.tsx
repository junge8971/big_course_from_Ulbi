import { StoryFn } from '@storybook/react/*';
import { StoreProvider } from 'app/Providers/StoreProvider';
import { StateSchema } from 'app/Providers/StoreProvider/config/StateSchema';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
};

// eslint-disable-next-line max-len
export const storeDecorator = (initialState?: Partial<StateSchema>, asyncReducers?: ReducersList) => (Story: StoryFn) => {
  return (
    <StoreProvider
      initialState={initialState as StateSchema}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );
};
