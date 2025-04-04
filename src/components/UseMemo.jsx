import React, { useMemo, useState } from 'react';

function UseMemo() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 100000000; i++) {} // Simulate heavy calc
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>Use Memo testing</h2>
      <p>Count: {count}</p>
      <p>Double: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseMemo;
