import React,{useState} from "react";
import "./Counter.css"
const Counter = ()=>{
    let [counter,setCounter]=useState(0)
    const increment = ()=>{
        // setCounter(counter+1)
        setCounter(++counter)
    }
    const deccrement = ()=>{
        // setCounter(counter-1)
        setCounter(--counter)
    }
    return <>
        <div className="container">
            <h1>Counter</h1>
            <div className="counter-container">
                <button onClick={increment}>+</button>
                    <h1>{counter}</h1>
                <button onClick={deccrement}>-</button>
            </div>
        </div>
    </>
}
export default Counter