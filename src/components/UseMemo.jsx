import React, { useMemo, useState } from 'react';

function UseMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 100000000; i++) {}
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  const addTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  return (
    <div className="use-memo-section">
      <h2>Use Memo testing</h2>
      <button className="add-todo-btn" onClick={addTodo}>Add todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <p>Count: {count}</p>
      <p>Double: {memoizedValue}</p>
      <button className="increment-btn" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseMemo;
