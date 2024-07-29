import { createSlice } from '@reduxjs/toolkit';

import { counterSchema } from '../type/counterSchema';

// Define the initial state using that type
const initialState: counterSchema = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { actions: counterActions } = counterSlice;

export const { reducer: counterReducer } = counterSlice;
