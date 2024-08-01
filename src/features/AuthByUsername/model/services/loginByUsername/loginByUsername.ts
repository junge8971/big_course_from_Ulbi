import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from 'entity/User';
import { User } from 'entity/User/model/types/userSchema';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStarage';

export interface loginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  loginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername ', async (authData, thunkAPI) => {
  try {
    const response = await axios.post<User>('http://localhost:8000/login', authData);

    thunkAPI.dispatch(userActions.setAuthData(response.data));
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return thunkAPI.rejectWithValue('error');
  }
});
