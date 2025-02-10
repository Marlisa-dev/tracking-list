import { useState } from 'react'
import './App.css'
import NewTask from './components/NewTask'
import TasksBody from './components/TasksBody'
import TaskTracker from './components/TaskTracker'


function App() {
  const [todos, setTodos]= useState([
    {
      title: "Complete todo App",
      id: 1,
      is_complated: false
    },
    {
      title: "File Taxes",
      id: 2,
      is_complated: true
    },
    {
      title: "Create Wrokout Plan",
      id: 3,
      is_complated: false
    }
  ])
  const todos_completed = todos.filter((todo) => todo.is_complated === true).length;
  const todos_total = todos.length
  console.log(todos)
  return (
    <>
      <div className='header'><h1>TODO LIST</h1></div>
      <div className="container">
        <TaskTracker todos_completed={todos_completed} todos_total={todos_total}/>
        <NewTask />
        <TasksBody todos={todos} setTodos={setTodos}/>
        

      </div>
    </>
  )
}

export default App
