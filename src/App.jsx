import { useState } from 'react'
import './App.css'
import NewTask from './components/NewTask'
import TasksBody from './components/TasksBody'
import TaskTracker from './components/TaskTracker'


function App() {
  const [todos, setTodos]= useState([])
  // const [todosCompleted, setTodosCompleted]= useState(0);

  const todos_completed = todos.filter((todo) => todo.is_completed === true).length;
  const todos_total = todos.length
  console.log(todos)

  const handleCompleteTask = (id) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) =>
        todo.id === id 
        ? { ...todo, is_completed: !todo.is_completed } 
        : todo
      )
    );
  };

  return (
    <>
      <div className='header'><h1>TODO LIST</h1></div>
      <div className="container">
        <TaskTracker todos_completed={todos_completed} todos_total={todos_total}/>
        <NewTask setTodos={setTodos}/>
        <TasksBody todos={todos} setTodos={setTodos} handleCompleteTask={handleCompleteTask}/>
        

      </div>
    </>
  )
}

export default App
