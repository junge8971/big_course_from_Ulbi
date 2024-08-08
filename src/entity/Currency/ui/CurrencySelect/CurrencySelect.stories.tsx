import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/Providers/ThemeProvider';
import { styleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';

import { Currency } from '../../model/types/common';
import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'entity/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CurrencySelect>;

const Template: StoryFn<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: Currency.EUR,
};

export const Dark = Template.bind({});
Dark.args = {
  value: Currency.EUR,
};

Dark.decorators = [styleDecorator(Theme.dark)];
