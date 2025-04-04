// ReactMemo.js
import React from "react";

const TodoList = React.memo(({ todos }) => {
  console.log("Rendering TodoList...");
  return (
    <ul>
      {todos.map((todo, idx) => (
        <li key={idx}>{todo}</li>
      ))}
    </ul>
  );
});

export default TodoList;