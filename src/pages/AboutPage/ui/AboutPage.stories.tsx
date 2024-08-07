import { Meta, StoryFn } from '@storybook/react/*';
import { Theme } from 'app/Providers/ThemeProvider';
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';

import AboutPage from './AboutPage';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof AboutPage>;

const Template: StoryFn<typeof AboutPage> = (args) => <AboutPage />;

export const Normal = Template.bind({});
Normal.decorators = [storeDecorator({})];

export const Dark = Template.bind({});
Dark.decorators = [styleDecorator(Theme.dark), storeDecorator({})];
