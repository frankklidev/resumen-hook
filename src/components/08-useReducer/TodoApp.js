import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import useForm from '../../hooks/useForm';
import { useEffect } from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

import './styles.css';


const init = () => {

    return JSON.parse( localStorage.getItem('todos')) || [] ;

};


const TodoApp = () => {

  
   
    const [todos,dispatch] = useReducer(todoReducer, [],init);

    useEffect(() => {
    
        localStorage.setItem('todos', JSON.stringify(todos));
    
    }, [todos])
    

   
    

    const handleDelete =(todoId) =>{
       
      dispatch({
        type:'delete',
        payload:todoId
      });

    }

    const handleToggle=(todoId)=>{
   
          dispatch({
            type:'toggle',
            payload:todoId
          });
          console.log('Clicked to toggle')
    }

    const handleAddTodo = (newTodo) =>{

         
          dispatch( {
            type:'add',
            payload:newTodo
          });
    }

  return (
    <div>
        <h1>TodoApp ({todos.length})</h1>
        <hr/>

        <div className="row">
            <div className='col-7'>

               <TodoList 
                 todos={todos}
                 handleToggle={handleToggle}
                 handleDelete = {handleDelete}
               />
            </div>
            <div className='col-5'>
                <TodoAdd
                 handleAddTodo={handleAddTodo}

                />
            </div>
        </div>
    </div>
  )
}

export default TodoApp