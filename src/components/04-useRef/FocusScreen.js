import React, { useRef } from 'react';
import '../02-useEffect/effects.css'

const FocusScreen = () => {

    const inputRef = useRef()
 
    console.log(inputRef)

    const handleClick = ()=>{
      inputRef.current.select();

    }
    
  return (
    <div>
        <h1>FocusScreen</h1>
        <hr/>

        <input
          className='form-control'
          ref={inputRef}
          placeholder='Su Nombre'
        />
        

        <button 
        className='btn btn-outline-primary mt-5'
        onClick={handleClick}>Focus</button>
    </div>
  )
}

export default FocusScreen;