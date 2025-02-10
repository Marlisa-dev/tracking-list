import React from 'react'
import Task from './Task'



const TasksBody = ({ todos }) => {
  return (
    <ol className='tasksbody'>
      {todos && todos.length > 0 ? (
        todos.map((item, index) => <Item key={index} item={item} />)
      ) : (<p>Nothing on your list</p>)}

    </ol>

  )
}

export default TasksBody