import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/Providers/ThemeProvider';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';

import { Code } from './Code';

export default {
  title: 'ui/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Code>;

const Template: StoryFn<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
};

export const Dark = Template.bind({});
Dark.args = {
  text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
};
Dark.decorators = [styleDecorator(Theme.dark)];
