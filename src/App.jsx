import { useState } from 'react'
import './App.css'
import NewTask from './components/NewTask'
import TasksBody from './components/TasksBody'
import TaskTracker from './components/TaskTracker'


function App() {
  const [todos, setTodos]= useState([])
  return (
    <>
      <div className='header'><h1>TODO LIST</h1></div>
      <div className="container">
        <TaskTracker todos_completed={0} todos_total={0}/>
        <NewTask />
        <TasksBody todos={[]}/>
        

      </div>
    </>
  )
}

export default App
