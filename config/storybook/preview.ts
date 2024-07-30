import type { Preview } from '@storybook/react';

import { Theme } from '../../src/app/Providers/ThemeProvider/lib/ThemeContext';
import { browserDecorator } from '../../src/shared/config/storybook/styleDecorator/browserDecorator';
import { styleDecorator } from '../../src/shared/config/storybook/styleDecorator/styleDecorator';
import { translationDecorator } from '../../src/shared/config/storybook/translationDecorator/translationDecorator';

const preview: Preview = {
  decorators: [styleDecorator(Theme.light), browserDecorator, translationDecorator],

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
