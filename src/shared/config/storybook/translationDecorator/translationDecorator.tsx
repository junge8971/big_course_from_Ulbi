import { StoryFn } from '@storybook/react/*';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';

export const translationDecorator = (Story: StoryFn) => (
  <Suspense>
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  </Suspense>
);
