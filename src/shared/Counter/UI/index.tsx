import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, AppState } from '@app/model/store';

import { decrement, increment, incrementByAmount } from '../model/reducer';

export default function Counter() {
  const count = useSelector((state: AppState) => state.counter.count);
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
