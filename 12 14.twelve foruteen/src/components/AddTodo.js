import React,{useState} from 'react'
import { v4 as uuid } from "uuid";

export default function AddTodo({addTodo}) {
  const [todo, setTodo] = useState("");
  function submit(){
    if(!todo) return
    const newTodo={
        id:uuid(),
        task:todo,
        completed:false
    }
    addTodo(newTodo);
    setTodo("")
  }
  return (
    <div>
      <input 
            type="text" 
            onChange={(e)=>setTodo(e.target.value)}
            value={todo}
            placeholder='Enter a messsage' />
        <button onClick={submit}>Add Todo</button>
        
    </div>
  )
}
