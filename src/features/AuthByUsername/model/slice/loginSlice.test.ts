import { loginSchema } from '../types/loginShema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice ', () => {
  test('test set username', () => {
    const state: Partial<loginSchema> = {
      username: 'test',
    };
    expect(loginReducer(state as loginSchema, loginActions.setUsername('test result'))).toEqual({
      username: 'test result',
    });
  });

  test('test set password', () => {
    const state: Partial<loginSchema> = {
      password: 'test',
    };
    expect(loginReducer(state as loginSchema, loginActions.setPassword('test result'))).toEqual({
      password: 'test result',
    });
  });

  test('should work with empty state', () => {
    expect(loginReducer(undefined, loginActions.setPassword('test result'))).toEqual({
      password: 'test result',
      isLoading: false,
      username: '',
    });
  });
});
