import React from 'react'
import useForm from '../../hooks/useForm';

const TodoAdd = ({handleAddTodo}) => {

    const [{description},handleInputChange,reset] = useForm({ 
        description:'',
    });

    const handleSubmit =(e)=>{
        e.preventDefault();

        if (description.trim().length>=3) {
           
            const newTodo={
                id: new Date().getTime(),
                desc:description,
                done: false
               }
        
               const action = {
                 type:'add',
                 payload:newTodo
               }
               handleAddTodo(newTodo);
               reset();
        }else
        return;
    }


  return (
    <>
        <h4>Agregar Todo</h4>
                <hr/>
                <form onSubmit={handleSubmit}>
 
                  <input
                      type='text'
                      className='form-control'
                      name='description'
                      value={description}
                      onChange={handleInputChange}
                      placeholder='Aprender ....'
                      autoComplete='off'
                  />

            <div className="d-grid gap-2">
            <button
            type='submit'
             className='btn btn-outline-primary mt-1 btn-block'>
                   Agregar
            </button>
            
            </div>
                  

            </form>
    </>
  )
}

export default TodoAdd