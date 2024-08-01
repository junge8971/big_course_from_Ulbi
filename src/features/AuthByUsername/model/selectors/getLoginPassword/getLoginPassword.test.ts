import { StateSchema } from 'app/Providers/StoreProvider';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return test', () => {
    const state: Partial<StateSchema> = {
      login: { username: 'test', password: 'test', isLoading: true, error: 'test' },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('test');
  });

  test('empty state', () => {
    const state: Partial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual(undefined);
  });
});
