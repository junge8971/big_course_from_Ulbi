import type { Preview } from '@storybook/react';

import { Theme } from '../../src/app/Providers/ThemeProvider/lib/ThemeContext';
import { browserDecorator } from '../../src/shared/config/storybook/styleDecorator/browserDecorator';
import { styleDecorator } from '../../src/shared/config/storybook/styleDecorator/styleDecorator';

const preview: Preview = {
  decorators: [styleDecorator(Theme.light), browserDecorator],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
