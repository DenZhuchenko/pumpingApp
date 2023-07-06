import React, {useState} from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    document.getElementById('root')
    return (
        <div>
            <strong>{counter}</strong>
            <button className={classes.incBtn} onClick={() => setCounter(prevState => prevState + 1)}>increment</button>
            <button onClick={() => setCounter(prevState => prevState - 1)}>decrement</button>
        </div>

    );
};

export default Counter;