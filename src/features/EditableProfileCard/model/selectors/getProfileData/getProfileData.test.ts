import { StateSchema } from 'app/Providers/StoreProvider';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';

import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return profile data', () => {
    const data = {
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
        data,
        isLoading: false,
        readonly: true,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    expect(getProfileData(undefined)).toBeUndefined();
  });
});
