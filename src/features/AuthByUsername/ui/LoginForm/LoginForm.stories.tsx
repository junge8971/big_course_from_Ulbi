import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import type { Meta, StoryFn } from '@storybook/react';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';
import { Theme } from 'app/Providers/ThemeProvider';
import { LoginForm } from './LoginForm';

const meta = {
  title: 'feature/LoginForm',
  component: LoginForm,

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;

const Template: StoryFn<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.decorators = [
  storeDecorator({
    login: { username: 'test', password: 'test', isLoading: false },
  }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [
  styleDecorator(Theme.dark),
  storeDecorator({
    login: { username: 'test', password: 'test', isLoading: false },
  }),
];

export const WithError = Template.bind({});
WithError.decorators = [
  storeDecorator({
    login: {
      username: 'test', password: 'test', isLoading: false, error: 'error',
    },
  }),
];

export const IsLoading = Template.bind({});
IsLoading.decorators = [
  storeDecorator({
    login: { username: 'test', password: 'test', isLoading: true },
  }),
];
