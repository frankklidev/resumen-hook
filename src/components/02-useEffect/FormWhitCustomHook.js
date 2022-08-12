
import React, {  useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';
import './effects.css';


const FormWhitCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        nombre:'',
        email:'',
        password:''
    });

    const {nombre,email,password} = formValues;

    useEffect(()=>{
       console.log('email cambio')
    },[email])

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formValues)
    }
    
  return (
    <form onSubmit={handleSubmit}>
     <h1>FormWhitCustomHook</h1>
     <hr/>
     <div className='form-group'>
       <input
         name='nombre'
         value={nombre}
         className='form-control'
         placeholder='Escribe tu Nombre'
         autoComplete='off'
         onChange={handleInputChange}
       />

     </div>
     <div className='form-group'>
       <input
         name='email'
         value={email}
         className='form-control'
         placeholder='Escribe tu Correo'
         autoComplete='off'
         onChange={handleInputChange}
       />

     </div>

     <div className='form-group'>
       <input
         type='password'
         name='password'
         value={password}
         className='form-control'
         placeholder='****'
         onChange={handleInputChange}
       />

       <button 
         type='submit'
         className='btn btn-primary'
       >Guardar</button>

     </div>
    </form>
  )
}

export default FormWhitCustomHook;

