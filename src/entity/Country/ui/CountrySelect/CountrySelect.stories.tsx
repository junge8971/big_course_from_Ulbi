import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/Providers/ThemeProvider';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';

import { Country } from '../../model/types/common';
import { CountrySelect } from './CountrySelect';

export default {
  title: 'entity/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CountrySelect>;

const Template: StoryFn<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: Country.Armenia,
};

export const Dark = Template.bind({});
Dark.args = {
  value: Country.Armenia,
};

Dark.decorators = [styleDecorator(Theme.dark)];
