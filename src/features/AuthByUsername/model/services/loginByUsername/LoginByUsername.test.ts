import { userActions } from 'entity/User';
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
  // Без переиспользуемого функционала
  //   let dispatch: Dispatch;
  //   let getState: () => StateSchema;
  //   beforeEach(() => {
  //     dispatch = jest.fn();
  //     getState = jest.fn();
  //   });
  //   test('success login', async () => {
  //     const userData = { username: 'username', id: '1' };
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
  //     const action = loginByUsername({ username: 'username', password: 'password' });
  //     const result = await action(dispatch, getState, undefined);
  //     expect(mockedAxios.post).toHaveBeenCalled();
  //     expect(result.meta.requestStatus).toBe('fulfilled');
  //     expect(result.payload).toEqual(userData);
  //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
  //     expect(dispatch).toHaveBeenCalledTimes(3);
  //   });
  //   test('error login', async () => {
  //     mockedAxios.post.mockReturnValue(Promise.reject());
  //     const action = loginByUsername({ username: 'username', password: 'password' });
  //     const result = await action(dispatch, getState, undefined);
  //     expect(mockedAxios.post).toHaveBeenCalled();
  //     expect(result.meta.requestStatus).toBe('rejected');
  //     expect(result.payload).toBe('error');
  //     expect(dispatch).toHaveBeenCalledTimes(2);
  //   });

  // C переиспользуемым классом

  test('success login', async () => {
    const userData = { username: 'username', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));

    const result = await thunk.callThunk({ username: 'username', password: 'password' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
  });
  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.reject());
    const result = await thunk.callThunk({ username: 'username', password: 'password' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
