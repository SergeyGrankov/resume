import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@app/model/store';

import { decrement, increment, incrementByAmount } from '../model/reducer';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment 5
      </button>
    </div>
  );
}
