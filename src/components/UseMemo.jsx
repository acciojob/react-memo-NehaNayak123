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
    <div>
      <h2>React.useMemo</h2>
      <h3>My todos</h3>
      <button onClick={addTodo}>New todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h4>Expensive Calculation</h4>
      <p> {memoizedValue}</p>
    </div>
  );

}
export default UseMemo;
