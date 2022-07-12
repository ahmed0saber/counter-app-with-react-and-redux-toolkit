import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { decrement, increment, incrementByAmount } from '../redux/counterSlice'

export default function Counter() {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    const handleIncreament = () => {
        dispatch(increment())
    }
    const handleDecreament = () => {
        dispatch(decrement())
    }
    const handleIncByValue = (value) => {
        dispatch(incrementByAmount(value))
    }

    return (
        <div className='my-counter'>
        <h1>Counter App</h1>
            <p>{count}</p>
            <div className='btns'>
                <button onClick={handleIncreament}>Increase</button>
                <button onClick={handleDecreament}>Decrease</button>
                <button onClick={() => handleIncByValue(10)}>Add 10</button>
            </div>
        </div>
    )
}
