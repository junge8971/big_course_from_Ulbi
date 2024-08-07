import { StateSchema } from 'app/Providers/StoreProvider';

export const getLoginPassword = (state: StateSchema) => state?.login?.password || '';
