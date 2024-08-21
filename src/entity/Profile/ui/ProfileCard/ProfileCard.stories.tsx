import { error } from 'console';

import { Meta, StoryFn } from '@storybook/react/*';
import { Theme } from 'app/Providers/ThemeProvider';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';

import { ProfileCard } from './ProfileCard';

export default {
  title: 'entity/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ProfileCard>;

const Template: StoryFn<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  data: {
    first: 'first',
    lastname: 'lastname',
    age: 22,
    currency: Currency.RUB,
    country: Country.Armenia,
    city: 'city',
    username: 'username',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
  },
  isLoading: false,
};

export const Dark = Template.bind({});
Dark.args = {
  data: {
    first: 'first',
    lastname: 'lastname',
    age: 22,
    currency: Currency.RUB,
    country: Country.Armenia,
    city: 'city',
    username: 'username',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
  },
  isLoading: false,
};

Dark.decorators = [styleDecorator(Theme.dark), storeDecorator({})];

export const Loading = Template.bind({});

export const WithError = Template.bind({});
WithError.args = {
  error: 'error',
  isLoading: false,
};
