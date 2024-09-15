import { Profile } from 'entity/Profile';
import { regexForNumberInString } from 'shared/regex/common';

import { ValidateProfileError } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const {
    first, lastname, age, country,
  } = profile;
  const errors: ValidateProfileError[] = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_PROFILE_DATA);
  }

  if (!regexForNumberInString.test(age.toString())) {
    errors.push(ValidateProfileError.INCORRECT_PROFILE_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_PROFILE_COUNTY);
  }

  return errors;
};
