import { createSlice } from '@reduxjs/toolkit';

import { userSchema } from '../types/userSchema';

// Define the initial state using that type
const initialState: userSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
