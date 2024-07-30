import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';
import { Theme } from 'app/Providers/ThemeProvider';
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

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  isOpen: true,
};

PrimaryDark.decorators = [styleDecorator(Theme.dark)];
