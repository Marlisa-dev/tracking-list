import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { RiCheckboxBlankCircleLine, RiCheckboxBlankCircleFill } from "react-icons/ri";

const Task = ({ item, setTodos, handleCompleteTask }) => {
  const [editing, setEditing] = useState(false);
  const inputRef = React.useRef(null);

  const handleEdit = () => {
    setEditing(true);
  };
  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
  };
  const handleComplete = () => {
    // Toggle the completion status
    handleCompleteTask(item.id);
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  const handleInputSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  const handleInputBlur = () => {
    setEditing(false);
  };
  
  const handleInputChange = (e) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, title: e.target.value } : todo
      )
    );
  };

  return (
    <li className='task' id={item.id}> 
      {editing ? (
        <form className="edit-form" onSubmit={handleInputSubmit}>
          <label htmlFor="edit-todo">
            <input
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
          </label>
        </form>
      ) : (
        <>
          {item.is_completed ? (
            <RiCheckboxBlankCircleFill className='checked' onClick={handleComplete} />
          ) : (
            <RiCheckboxBlankCircleLine className='checked' onClick={handleComplete} />
          )}
          <p style={{ textDecoration: item.is_completed ? 'line-through' : 'none' }}>{item.title}</p>
          <FaEdit className='edit-task-icon' onClick={handleEdit} />
          <FaTrashAlt className='delete-task-icon' onClick={handleDelete} />
        </>
      )}
    </li>
  );
};

export default Task;
