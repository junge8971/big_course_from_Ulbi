import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/Providers/ThemeProvider';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';

import { Skeleton } from './Skeleton';

export default {
  title: 'ui/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: '100%',
  height: 200,
};

export const Dark = Template.bind({});
Dark.args = {
  width: '100%',
  height: 200,
};
Dark.decorators = [styleDecorator(Theme.dark)];

export const Circle = Template.bind({});
Circle.args = {
  border: '50%',
  width: 100,
  height: 100,
};
