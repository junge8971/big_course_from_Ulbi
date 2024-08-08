import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/Providers/ThemeProvider';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';

import { Loader } from './Loader';

export default {
  title: 'ui/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [styleDecorator(Theme.dark)];
