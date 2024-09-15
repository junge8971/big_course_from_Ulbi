import { StateSchema } from 'app/Providers/StoreProvider';

import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { getValidateProfileError } from './getValidateProfileError';

describe('getValidateProfileError.test', () => {
  test('should return validate profile errors', () => {
    const state: Partial<StateSchema> = {
      profile: {
        validateProfileError: [ValidateProfileError.NO_DATA],
        isLoading: true,
        readonly: true,
      },
    };
    expect(getValidateProfileError(state as StateSchema)).toStrictEqual([
      ValidateProfileError.NO_DATA,
    ]);
  });

  test('should work with empty state', () => {
    expect(getValidateProfileError(undefined)).toBeUndefined();
  });
});
