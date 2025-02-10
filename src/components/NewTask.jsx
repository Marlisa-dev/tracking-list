import React from 'react'

const NewTask = ({setTodos}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.todo.value;
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        title: value,
        id: self.crypto.randomUUID(),
        is_completed: false
      },
    ])
    e.target.reset();
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Add an item to your list"
        />
      </label>
      <button className='add'>+</button>
    </form>
  )
}

export default NewTask