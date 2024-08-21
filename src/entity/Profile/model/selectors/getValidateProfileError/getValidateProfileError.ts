import { StateSchema } from 'app/Providers/StoreProvider';

export const getValidateProfileError = (state: StateSchema) => state?.profile?.validateProfileError;
