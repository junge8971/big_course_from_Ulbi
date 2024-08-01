import { StateSchema } from 'app/Providers/StoreProvider';

import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('should return state', () => {
    const state: Partial<StateSchema> = {
      login: { username: 'test', password: 'test', isLoading: true, error: 'test' },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      username: 'test',
      password: 'test',
      isLoading: true,
      error: 'test',
    });
  });

  test('empty state', () => {
    const state: Partial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});
