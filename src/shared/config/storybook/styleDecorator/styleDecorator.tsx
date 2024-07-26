import 'app/style/index.scss';

import { StoryFn } from '@storybook/react/*';
import { Theme } from 'app/Providers/ThemeProvider';

export const styleDecorator = (theme: Theme) => (Story: StoryFn) => (
  <div className={`app ${theme}`} style={{ minHeight: 'auto' }}>
    <Story />
  </div>
);
