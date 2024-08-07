import { Meta, StoryFn } from '@storybook/react/*';
import { Theme } from 'app/Providers/ThemeProvider';
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';

import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ProfilePage>;

const Template: StoryFn<typeof ProfilePage> = (args) => <ProfilePage />;

export const Normal = Template.bind({});
Normal.decorators = [storeDecorator({})];

export const Dark = Template.bind({});
Dark.decorators = [styleDecorator(Theme.dark), storeDecorator({})];
