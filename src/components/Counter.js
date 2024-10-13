import { useDispatch, useSelector } from 'react-redux';
import {actionsCounter} from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter.counter);
  const display = useSelector(state=>state.counter.showCounter);

  const IncrementHandler =()=>{dispatch(actionsCounter.increment())};
  const decrementHandler =()=>{dispatch(actionsCounter.decrement())};
  const incrementby =()=>{dispatch(actionsCounter.increase(10))};
  const toggleCounterHandler = () => {dispatch(actionsCounter.toggleCounter())};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {display &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={incrementby}>Increment by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
