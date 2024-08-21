import { Meta, StoryFn } from '@storybook/react/*';
import { Theme } from 'app/Providers/ThemeProvider';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
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
Normal.decorators = [
  storeDecorator({
    profile: {
      isLoading: false,
      readonly: true,
      form: {
        first: 'first',
        lastname: 'lastname',
        age: 22,
        currency: Currency.RUB,
        country: Country.Armenia,
        city: 'city',
        username: 'username',
        avatar:
          'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.decorators = [
  styleDecorator(Theme.dark),
  storeDecorator({
    profile: {
      isLoading: false,
      readonly: true,
      form: {
        first: 'first',
        lastname: 'lastname',
        age: 22,
        currency: Currency.RUB,
        country: Country.Armenia,
        city: 'city',
        username: 'username',
        avatar:
          'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
      },
    },
  }),
];
