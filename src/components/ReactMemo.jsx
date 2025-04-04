import React, { useState } from 'react'

const ReactMemo = () => {
    const [list, setlist] = useState('')
   const [appendList, setappendList] =useState([])

    const setListHandler = (e)=>{
         setlist(e.target.value)
    }

    const addHandler =(e)=>{
        e.preventDefault()
        if(list.trim() ==='') return ;
        if(list.length<5){
          return  alert('enter at list 5 charecter')
        }
    
        setappendList((prev)=>[...prev , list])
        setlist('')
    }

  return (
    <div>
        <h1>React.memo</h1>
        <input type='text' value={list} onChange={setListHandler}/>
        <button onClick={addHandler}>Add Skill</button>
          <ul>
            {
                appendList.map((items , index)=>{
                    return <li key={index}>{items}</li>
                })
            }
          </ul>
    </div>
  )
}

export default React.memo(ReactMemo);