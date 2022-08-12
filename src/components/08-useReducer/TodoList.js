import React from 'react';

import TodoListItem from './TodoListItem';


const TodoList = ({todos,handleToggle,handleDelete}) => {
  return (
    <ul className='list-group list-group-flush'>

    {todos.map((todo,index) => 
    <TodoListItem 
    key={todo.id}
    handleToggle={handleToggle}
    handleDelete={handleDelete}
    todo={todo}
    index={index}
    />)}
    
</ul>
  )
}

export default TodoList