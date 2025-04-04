import React, { useState } from 'react';

const ReactMemo = React.memo(({ addCustomTodo }) => {
  const [input, setInput] = useState('');

  return (
    <div>
      <h2>React Memo testing</h2>
      <input
        type="text"
        placeholder="Enter a skill"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addCustomTodo(input)}>Add Skill</button>
    </div>
  );
});

export default ReactMemo;
