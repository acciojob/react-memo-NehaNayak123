import React from 'react'
import ReactMemo from './ReactMemo';
import UseMemo from './UseMemo';

const App = () => {
  return (
    <div>
        <UseMemo/>
        <hr style={{width:'100%'}}/>
        <hr style={{width:'100%'}}/>
        <ReactMemo/>
        
    </div>
  )
}

export default App;