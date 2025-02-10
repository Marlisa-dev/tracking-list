import React from 'react'
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { RiCheckboxBlankCircleLine, RiCheckboxBlankCircleFill } from "react-icons/ri";

{/* <RiCheckboxBlankCircleLine /> */}
{/* <RiCheckboxBlankCircleFill /> */}
const Task = ({ item }) => {
  return (
    <li className='task' id={item.id}>
        <RiCheckboxBlankCircleLine className='checked'/>
        <p>{item.title}</p>
        <FaEdit className='edit-task-icon'/>
        <FaTrashAlt className='delete-task-icon'/>       
    </li>
  )
}

export default Task