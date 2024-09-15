import { StateSchema } from 'app/Providers/StoreProvider';

export const getProfileError = (state: StateSchema) => state?.profile?.error;
