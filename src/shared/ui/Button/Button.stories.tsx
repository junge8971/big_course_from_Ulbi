import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';
import { Theme } from 'app/Providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryLight: Story = {
  args: {
    children: 'Button',
  },
};
export const PrimaryDark: Story = {
  args: {
    children: 'Button',
  },
};
PrimaryDark.decorators = [styleDecorator(Theme.dark)];

export const ClearLight: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.clear,
  },
};
export const ClearDark: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.clear,
  },
};
ClearDark.decorators = [styleDecorator(Theme.dark)];

export const OutlineLight: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.outline,
  },
};
export const OutlineDark: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.outline,
  },
};
OutlineDark.decorators = [styleDecorator(Theme.dark)];
