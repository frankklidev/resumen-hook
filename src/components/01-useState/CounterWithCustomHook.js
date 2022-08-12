
import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css'

const CounterWithCustomHook = () => {

    const{decrement,reset,increment,state}= useCounter();
    
  return (
      <>
    <h1>CounterWithCustomHook : {state}</h1>
    <hr/>

     <button
     onClick={()=>increment(2)}
      className='btn btn-primary'>
      Sumar 1
      </button>   
     <button onClick={()=>decrement(2)} className='btn btn-secondary'>Restar 1</button>   
     <button onClick={reset} className='btn btn-secondary'>Resetear Valor </button>   
 

    </>
  )
}

export default CounterWithCustomHook