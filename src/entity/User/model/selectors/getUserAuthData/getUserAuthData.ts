import { StateSchema } from 'app/Providers/StoreProvider/config/StateSchema';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
