import React from 'react'

const NewTask = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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