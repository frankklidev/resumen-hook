import React, { useEffect, useState } from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

    const [formSate, setFormSate] = useState({
        nombre:'',
        email:''
    });

    const {nombre,email} = formSate;

    useEffect(()=>{
        console.log('hey')
    },[]);

    useEffect(()=>{
        console.log('FormState cambio')
    },[formSate]);

    useEffect(()=>{
        console.log('Email cambio')
    },[email]);


    const handleInputChange = ({target})=>{
       
        setFormSate({
            ...formSate,
           [ target.name]:target.value
        })
    }
  return (
    <>
     <h1>UseEffect</h1>
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

         {
           (nombre==='123')&&<Message/>
         }
    </>
  )
}

export default SimpleForm