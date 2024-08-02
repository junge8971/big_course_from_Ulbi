import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Profile, profileSchema } from '../types/profile';

const initialState: profileSchema = {
  isLoading: false,
  readonly: false,
  data: undefined,
  error: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;
