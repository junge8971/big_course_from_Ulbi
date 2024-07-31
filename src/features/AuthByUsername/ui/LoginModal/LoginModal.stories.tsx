import type { Meta, StoryFn } from '@storybook/react';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';
import { Theme } from 'app/Providers/ThemeProvider';
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { LoginModal } from './LoginModal';

const meta = {
  title: 'feature/LoginModal',
  component: LoginModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginModal>;

export default meta;

const Template: StoryFn<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  isOpen: true,
};
PrimaryLight.decorators = [
  // @ts-ignore
  storeDecorator({
    login: { username: 'test', password: 'test', isLoading: false },
  }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  isOpen: true,
};

PrimaryDark.decorators = [
  styleDecorator(Theme.dark),
  // @ts-ignore
  storeDecorator({
    login: { username: 'test', password: 'test', isLoading: false },
  }),
];
