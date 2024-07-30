import type { Meta, StoryFn, StoryObj } from '@storybook/react';
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

export const PrimaryDark = Template.bind({});

PrimaryDark.decorators = [styleDecorator(Theme.dark)];
