import { StateSchema } from 'app/Providers/StoreProvider';

export const getLoginError = (state: StateSchema) => state?.login?.error;
