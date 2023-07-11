import React from 'react'
import TodoItem from './TodoItem'

export default function DisplayTodo({todos,deleteTodo,editTodo,toggleCompleted}) {
  return (
    <div>
      {
        todos.map((todo)=>(
          <TodoItem
           key={todo.id}
           todo={todo}
           deleteTodo={deleteTodo}
           editTodo={editTodo}
           toggleCompleted={toggleCompleted}
        />
            ))
        }
    </div>
  )
}
