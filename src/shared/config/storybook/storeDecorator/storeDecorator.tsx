import { StoryFn } from '@storybook/react/*';
import { StoreProvider } from 'app/Providers/StoreProvider';
import { StateSchema } from 'app/Providers/StoreProvider/config/StateSchema';

export const storeDecorator = (initialState: StateSchema) => (Story: StoryFn) => (
  <StoreProvider initialState={initialState}>
    <Story />
  </StoreProvider>
);
