import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';

export enum ValidateProfileError {
  INCORRECT_PROFILE_DATA = 'INCORRECT_PROFILE_DATA',
  INCORRECT_PROFILE_AGE = 'INCORRECT_PROFILE_AGE',
  INCORRECT_PROFILE_COUNTY = 'INCORRECT_PROFILE_COUNTY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface profileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateProfileError?: ValidateProfileError[];
}
