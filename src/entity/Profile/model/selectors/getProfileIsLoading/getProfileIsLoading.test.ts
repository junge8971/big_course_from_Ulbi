import { StateSchema } from 'app/Providers/StoreProvider';

import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
  test('should return true from profile state', () => {
    const state: Partial<StateSchema> = {
      profile: {
        isLoading: true,
        readonly: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    expect(getProfileIsLoading(undefined)).toBeUndefined();
  });
});
