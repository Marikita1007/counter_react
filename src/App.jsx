import {useSelector, useDispatch} from 'react-redux';
import {increment, incrementAsyncThunk, decrement} from './store/valueSlice';

function App() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const isEven = useSelector((state) => state.counter.isEven);

    const handleIncrement = () => {
        dispatch(increment());

    };

    const handleIncrementAsync = () => {
        dispatch(incrementAsyncThunk());
    }

    // const handleDecrement = () => {
    //     dispatch(decrement());
    // };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <p>{isEven ? 'Even' : 'odd'}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleIncrementAsync}>Async counter</button>
            {/*<button onClick={handleDecrement}>Decrement</button>*/}
        </div>
    );
}

export default App;
