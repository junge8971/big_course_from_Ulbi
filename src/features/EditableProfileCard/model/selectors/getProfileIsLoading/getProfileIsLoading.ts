import { StateSchema } from 'app/Providers/StoreProvider';

export const getProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading;
