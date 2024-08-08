import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/Providers/ThemeProvider';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';

import { Avatar } from './Avatar';

export default {
  title: 'ui/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
  alt: 'Описание',
  size: 100,
};

export const Dark = Template.bind({});
Dark.args = {
  src: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
  alt: 'Описание',
  size: 100,
};
Dark.decorators = [styleDecorator(Theme.dark)];
