import React from 'react'
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { RiCheckboxBlankCircleLine, RiCheckboxBlankCircleFill } from "react-icons/ri";

{/* <RiCheckboxBlankCircleLine /> */}
{/* <RiCheckboxBlankCircleFill /> */}
const Task = ({ item, setTodos }) => {
  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id))
  }

  return (
    <li className='task' id={item.id}>
        <RiCheckboxBlankCircleLine className='checked'/>
        <p>{item.title}</p>
        <FaEdit className='edit-task-icon'/>
        <FaTrashAlt className='delete-task-icon' onClick={handleDelete}/>       
    </li>
  )
}

export default Task