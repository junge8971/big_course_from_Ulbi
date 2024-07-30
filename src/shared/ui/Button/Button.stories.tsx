import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';
import { Theme } from 'app/Providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
    theme: ButtonTheme.clear,
  },
};
export const ClearDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.clear,
  },
};
ClearDark.decorators = [styleDecorator(Theme.dark)];

export const OutlineLight: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.outline,
  },
};
export const OutlineDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.outline,
  },
};
OutlineDark.decorators = [styleDecorator(Theme.dark)];

export const BackgroundLight: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.background,
  },
};
export const BackgroundDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.background,
  },
};
BackgroundDark.decorators = [styleDecorator(Theme.dark)];

export const BackgroundInvertedLight: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.backgroundInverted,
  },
};
export const BackgroundInvertedDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.background,
  },
};
BackgroundInvertedDark.decorators = [styleDecorator(Theme.dark)];

export const Square: Story = {
  args: {
    children: 'Button',
    square: true,
  },
};

export const SquareSizeM: Story = {
  args: {
    children: 'Button',
    square: true,
    size: ButtonSize.m,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: 'Button',
    square: true,
    size: ButtonSize.l,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: 'Button',
    square: true,
    size: ButtonSize.xl,
  },
};

export const ButtonSizeM: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.outline,
    size: ButtonSize.m,
  },
};

export const ButtonSizeL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.outline,
    size: ButtonSize.l,
  },
};

export const ButtonSizeXL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.outline,
    size: ButtonSize.xl,
  },
};

export const DisabledLight: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export const DisabledDark: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};
DisabledDark.decorators = [styleDecorator(Theme.dark)];
