import { StateSchema } from 'app/Providers/StoreProvider';

export const getProfileReadOnly = (state: StateSchema) => state?.profile?.readonly;
