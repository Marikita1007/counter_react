import {useSelector, useDispatch} from 'react-redux';
import {increment, incrementAsyncThunk} from './store/valueSlice';

function App() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const isEven = useSelector((state) => state.counter.isEven);
    const asynCount = useSelector((state) => state.counter.asyncValue );

    return (
        <div>
            <h1>Counter: {count}</h1>
            <h1>Random Value: {asynCount}</h1>
            <p>{isEven ? 'Even' : 'odd'}</p>
            <button onClick={() => dispatch(increment()) }>Increment</button>
            <button onClick={() => dispatch(incrementAsyncThunk()) }>Async counter</button>
        </div>
    );
}

export default App;
