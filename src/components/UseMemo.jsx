
import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setcount] = useState(10)
    const [list , setList] = useState('');
    const [expensiveCalculation, setExpensiveCalculation] = useState(0)


    const listAddHandler = (e)=>{
        e.preventDefault()
        setList((prev)=>prev + "\nnew Todo")
    }

    // expensive calculation
   
           
        const calculation =   useMemo(()=>{
            let result = 0
            for(let i=0; i<count*123456789; i++){
              result +=i;
            } 
            return result
          },[count])



  return (
    <div>
        <h1>React.useMemo</h1>
        <h1>My todos</h1>
        <pre>{list}</pre>
        <button onClick={listAddHandler}>Add Todo</button>


  <hr style={{width:'100%'}}/>

   <p style={{display:'inline'}}>{count}</p>
   <button onClick={()=>setcount((prev)=>prev+1)}>+</button>

   <h1>Expensive Calculation</h1>
   

    <p>{calculation}</p>

    </div>
  )
}

export default UseMemo