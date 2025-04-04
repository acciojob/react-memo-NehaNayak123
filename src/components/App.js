import React, { useState, useCallback } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const addCustomTodo = useCallback((task) => {
    if (task.length > 5) {
      setTodos([...todos, task]);
    }
  }, [todos]);

  return (
    <div className="app">
      <h1>Todo App</h1>
      <button onClick={addTodo}>Add todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <UseMemo />
      <ReactMemo addCustomTodo={addCustomTodo} />
    </div>
  );
}

export default App;
