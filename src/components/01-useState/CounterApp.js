import React, { useState } from 'react';
import './counter.css';

const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1:10,
        counter2:20
    });

  const {counter1,counter2}=counter;

  return (
      <>
    <h1>CounterApp1 {counter1}</h1>
    <h1>CounterApp2 {counter2}</h1>
    <hr/>
    <button 
    onClick={()=>setCounter({
        ...counter,
        counter1:counter1+1,
        
    })}
    className='btn btn-primary'>+1</button>
    </>
  )
}

export default CounterApp