import { StateSchema } from 'app/Providers/StoreProvider';

export const getUserInited = (state: StateSchema) => state.user._inited;
