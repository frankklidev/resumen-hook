import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css'
import { procesoPesado } from '../helpers/procesoPesado';


const MemoHook = () => {

    const{counter,increment} = useCounter(1000);

    const[show,setShow]=useState(true);



   const memoProcesoPesado= useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
        <h1>MemoHook</h1>
        <h3>Counter: <small>{counter}</small></h3> 
        <hr/>

        <p>{memoProcesoPesado}</p>
        <button onClick={increment} className='btn btn-primary'>+1</button>
        <button className='btn btn-outline-primary m-lg-3'
          onClick={() => {setShow(!show)}}
        >Show/Hide {JSON.stringify(show)}</button>
    </div>
  )
}

export default MemoHook;