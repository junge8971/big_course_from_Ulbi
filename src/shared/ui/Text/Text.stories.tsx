import type { Meta, StoryFn } from '@storybook/react';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';
import { Theme } from 'app/Providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta = {
  title: 'ui/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  text: 'text',
  title: 'title',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  text: 'text',
  title: 'title',
};

PrimaryDark.decorators = [styleDecorator(Theme.dark)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'text',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'title',
};
OnlyTitleDark.decorators = [styleDecorator(Theme.dark)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'text',
};
OnlyTextDark.decorators = [styleDecorator(Theme.dark)];

export const Error = Template.bind({});
Error.args = {
  text: 'text',
  title: 'title',
  theme: TextTheme.error,
};
