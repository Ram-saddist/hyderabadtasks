import React,{useState} from 'react'

export default function TodoItem({todo,editTodo,deleteTodo,toggleCompleted}) {
  const [editMode,setEditMode]=useState(false);
  const [task,setTask]=useState(todo.task)
  function handleDelete(){
    deleteTodo(todo.id)
  }
  function handleEdit(){
    setEditMode(true)
  }
  function handleSave(){
    editTodo(todo.id,task);
    setEditMode(false)
  }
  function handleCancel(){
    setTask(todo.task)
    setEditMode(false)
  }
  function handleCompleted(){
    toggleCompleted(todo.id)
  }
  return (
    <div>
        {
          editMode?(
            <div>
              <input 
                type="text" 
                value={task} 
                onChange={(e)=>setTask(e.target.value)}/>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ):(
            <div>
              <span style={{textDecoration:todo.completed?"line-through":"none"}}>
                {todo.task}
              </span>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleCompleted}/>
            </div>
          )
        }
    </div>
  )
}
