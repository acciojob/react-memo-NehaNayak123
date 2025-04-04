import React from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

function App() {
  return (
    <div className="app">
      <h1>Todo + Counter App</h1>
      <UseMemo />
      <ReactMemo />
    </div>
  );
}

export default App;
