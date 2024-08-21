import { StateSchema } from 'app/Providers/StoreProvider';

import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
  test('return error from profile', () => {
    const state: Partial<StateSchema> = {
      profile: { error: 'error', isLoading: true, readonly: true },
    };
    expect(getProfileError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    expect(getProfileError(undefined)).toBeUndefined();
  });
});
