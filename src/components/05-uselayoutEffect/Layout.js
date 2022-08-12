import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'
import './layout.css';

const Layout = () => {

    const{counter,increment}= useCounter(1)

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote} = !!data&&data[0];

    const pTag = useRef()

    const [boxsize,setBoxSize] = useState({})

    useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
    
    
    }, [quote])

    
  return (
     <div>
        
       <h1>Breaking Bad Quotes</h1>
       <hr/>
     
     <blockquote className="blockquote text-end">
        <p ref={pTag} className='mb-2'>{quote}</p>
     </blockquote>

     <pre>{JSON.stringify(boxsize,null,3)}</pre>
    
   

     <button className='btn btn-primary' onClick={increment}>
        Siguiente Quote
     </button>


     
  </div>
    
    )
}

export default Layout