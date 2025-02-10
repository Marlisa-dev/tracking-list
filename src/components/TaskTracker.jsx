import React from 'react'

const TaskTracker = ({todos_completed, todos_total}) => {
  return (
    <div className='tasktracker'>
        <div>
            <h3>Tasks Done</h3>
            <p>Keep it up</p>
        </div>
        <div>
        {todos_completed}/{todos_total}    
        </div>
       
    </div>
  )
}

export default TaskTracker