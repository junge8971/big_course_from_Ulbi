import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/Providers/ThemeProvider';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';

import { Select } from './Select';

export default {
  title: 'ui/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'test',
  options: [
    { value: 1, content: '1' },
    { value: 2, content: '2' },
    { value: 3, content: '3' },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'test',
  options: [
    { value: 1, content: '1' },
    { value: 2, content: '2' },
    { value: 3, content: '3' },
  ],
};
Dark.decorators = [styleDecorator(Theme.dark)];
