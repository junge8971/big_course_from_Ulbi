import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/Providers/StoreProvider';
import { userActions } from 'entity/User';
import { User } from 'entity/User/model/types/userSchema';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStarage';

export interface loginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername ',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post<User>('/login', authData);

      dispatch(userActions.setAuthData(response.data));
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
