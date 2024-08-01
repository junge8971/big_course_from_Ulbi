import { StateSchema } from 'app/Providers/StoreProvider';

import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return undefined', () => {
    const state: Partial<StateSchema> = {
      login: { username: 'test', password: 'test', isLoading: false },
    };
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });

  test('should return test', () => {
    const state: Partial<StateSchema> = {
      login: { username: 'test', password: 'test', isLoading: false, error: 'test' },
    };
    expect(getLoginError(state as StateSchema)).toEqual('test');
  });

  test('empty state', () => {
    const state: Partial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
