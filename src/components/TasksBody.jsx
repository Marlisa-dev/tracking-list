import React from 'react'
import Task from './Task'


const TasksBody = ({ todos, setTodos, handleCompleteTask }) => {
  return (
    <ol className='tasksbody'>
      {todos && todos.length > 0 ? (
        todos.map((item, index) => ( 
          <Task 
            key={index} 
            item={item} 
            setTodos={setTodos}
            handleCompleteTask={handleCompleteTask}/>
        ))
      ) : (
        <p>There is nothing on your list at this moment. Add something to be productive</p>
        )}
    </ol>
  );
}

export default TasksBody