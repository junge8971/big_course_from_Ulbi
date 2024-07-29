import { StateSchema } from 'app/Providers/StoreProvider';

export const getCounter = (state: StateSchema) => state.counter;
