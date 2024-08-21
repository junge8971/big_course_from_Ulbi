import { StateSchema } from 'app/Providers/StoreProvider';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';

import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return form from profile state', () => {
    const form = {
      first: 'first',
      lastname: 'lastname',
      age: 22,
      currency: Currency.RUB,
      country: Country.Armenia,
      city: 'city',
      username: 'username',
      avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    };

    const state: Partial<StateSchema> = {
      profile: {
        form,
        isLoading: false,
        readonly: false,
      },
    };
    expect(getProfileForm(state as StateSchema)).toBe(form);
  });

  test('should work with empty state', () => {
    expect(getProfileForm(undefined)).toBeUndefined();
  });
});
