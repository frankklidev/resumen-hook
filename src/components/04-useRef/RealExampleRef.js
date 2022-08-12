import React, { useState } from 'react';
import '../02-useEffect/effects.css'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

const RealExampleRef = () => {

  const [show, setShow] = useState(false)
  console.log(show)

  return (
    <div>
        <h1>RealExampleRef</h1>
        <hr/>

       { show&&<MultipleCustomHooks/>}

       <button className="btn btn-primary mt-5"onClick={()=>setShow(!show)}>Mostrar  Componente</button>
    </div>
  )
}

export default RealExampleRef