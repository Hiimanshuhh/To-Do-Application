import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError("Task cannot be empty");
      return;
    }
    addTodo(text.trim());
    setText('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Add new task"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default AddTodo;
