import { useDispatch } from 'react-redux';

import { createReduxStore } from '../config/store';

const store = createReduxStore();

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
