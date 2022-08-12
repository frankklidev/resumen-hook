import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

    console.log('se volvio a ejecutar')

  return (
    <button 
     onClick={() =>{
        increment(5)
     }}
    className='btn btn-outline-primary'>Incrementar</button>
  )
})

