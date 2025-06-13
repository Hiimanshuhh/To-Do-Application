import React, { useState, useEffect } from 'react';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortAsc, setSortAsc] = useState(true);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos"));
    if (stored) setTodos(stored);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    return sortAsc
      ? a.text.localeCompare(b.text)
      : b.text.localeCompare(a.text);
  });

  return (
    <div className="app">
      <h1>To-Do Application</h1>
      <AddTodo addTodo={addTodo} />
      <div className="controls">
        <button onClick={() => setSortAsc(!sortAsc)}>
          Sort {sortAsc ? "↓" : "↑"}
        </button>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <TodoList
        todos={sortedTodos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
