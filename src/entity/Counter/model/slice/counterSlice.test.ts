import { counterSchema } from '../type/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice ', () => {
  test('decrement', () => {
    const state: counterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });

  test('increment', () => {
    const state: counterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
