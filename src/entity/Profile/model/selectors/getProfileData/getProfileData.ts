import { StateSchema } from 'app/Providers/StoreProvider';

export const getProfileData = (state: StateSchema) => state.profile?.data;
