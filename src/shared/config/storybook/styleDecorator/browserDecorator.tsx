import { StoryFn } from '@storybook/react/*';
import { BrowserRouter } from 'react-router-dom';

export const browserDecorator = (Story: StoryFn) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
