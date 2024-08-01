import { StateSchema } from 'app/Providers/StoreProvider';

import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return true', () => {
    const state: Partial<StateSchema> = {
      login: { username: 'test', password: 'test', isLoading: true, error: 'test' },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test('empty state', () => {
    const state: Partial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
