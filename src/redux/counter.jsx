import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { increment, decrement, reset } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state); //Access the counter state
    const dispatch = useDispatch(); //Dispatch actions
    const [customValue, setCustomValue] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(increment(Number(customValue)));
    };

    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h1>Redux Counter with createSlice</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())} style={{margin: "0 10px"}}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())} style={{margin: "0 10px"}}>
                Decrement
            </button>
            <button onClick={() => dispatch(reset())} style={{margin: "0 10px"}}>
                Reset
            </button>
            <form id='my-form' onSubmit={handleSubmit}>
                <label htmlFor="inputField">
                    <input 
                        type="number" 
                        id='inputField' 
                        name='inputField' 
                        placeholder='Increment by custom value'
                        value={customValue}    
                        onChange={(e) => setCustomValue(e.target.value)}
                    />
                    <button type='submit'>Increment</button>
                </label>
            </form>
        </div>
    );
};

export default Counter;