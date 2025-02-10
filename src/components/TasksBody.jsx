import React from 'react'
import Task from './Task'


const TasksBody = ({ todos, setTodos }) => {
  return (
    <ol className='tasksbody'>
      {todos && todos.length > 0 ? (
        todos.map((item, index) => ( <Task key={index} item={item} setTodos={setTodos}/>
        ))
      ) : (
        <p>Nothing on your list</p>
        )}
    </ol>
  );
}

export default TasksBody