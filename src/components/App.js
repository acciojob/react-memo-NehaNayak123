// App.js
import React, { useState, useCallback } from "react";
import TodoList from "./ReactMemo";
import "./styles.css";
import CountInfo from "./useMemo";

function App() {
  const [todos, setTodos] = useState(["Learn React"]);
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "New todo"]);
  }, []);

  const addCustomTodo = useCallback(() => {
    if (input.length > 5) {
      setTodos((prev) => [...prev, input]);
      setInput("");
    } else {
      alert("Task must be more than 5 characters.");
    }
  }, [input]);

  const increment = () => setCounter((c) => c + 1);

  return (
    <div className="app">
      <h1>Todo + Memo App</h1>
      <button onClick={addTodo}>Add Todo</button>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter custom todo"
      />
      <button onClick={addCustomTodo}>Submit</button>
      <TodoList todos={todos} />

      <hr />

      <CountInfo count={counter} />
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;