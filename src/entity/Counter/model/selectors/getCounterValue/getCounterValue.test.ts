import { StateSchema } from 'app/Providers/StoreProvider';

import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('', () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
