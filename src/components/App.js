import React from 'react';
import './styles.css';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

function App() {
  return (
    <div className="app">
      <h1>Todo + Skill App</h1>
      <UseMemo />
      <ReactMemo />
    </div>
  );
}

export default App;
