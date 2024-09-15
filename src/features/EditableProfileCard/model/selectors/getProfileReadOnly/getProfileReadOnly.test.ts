import { StateSchema } from 'app/Providers/StoreProvider';

import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly.test', () => {
  test('should return true', () => {
    const state: Partial<StateSchema> = {
      profile: {
        readonly: true,
        isLoading: true,
      },
    };
    expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    expect(getProfileReadOnly(undefined)).toBeUndefined();
  });
});
