import { StateSchema } from 'app/Providers/StoreProvider';

export const getProfileForm = (state: StateSchema) => state.profile?.form;
