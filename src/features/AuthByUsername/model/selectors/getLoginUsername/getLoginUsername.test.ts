import { StateSchema } from 'app/Providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return test', () => {
    const state: Partial<StateSchema> = {
      login: { username: 'test', password: 'test', isLoading: true, error: 'test' },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('test');
  });

  test('empty state', () => {
    const state: Partial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual(undefined);
  });
});
