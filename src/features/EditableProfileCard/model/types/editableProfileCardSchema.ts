import { Profile } from 'entity/Profile';

export enum ValidateProfileError {
  INCORRECT_PROFILE_DATA = 'INCORRECT_PROFILE_DATA',
  INCORRECT_PROFILE_AGE = 'INCORRECT_PROFILE_AGE',
  INCORRECT_PROFILE_COUNTY = 'INCORRECT_PROFILE_COUNTY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface profileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateProfileError?: ValidateProfileError[];
}
