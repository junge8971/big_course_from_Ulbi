import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

const CounterComponent: FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>{counterValue}</h1>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </div>
  );
};

export const Counter = memo(CounterComponent);
