import React,{useState} from 'react'
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';

export default function MessageList() {
  const [todoList,setTodoList]=useState([]);
  function addTodo(todo){
    setTodoList([...todoList,todo])    
  }
  function deleteTodo(id){
    const newTodos=todoList.filter((todo)=>todo.id!==id);
    setTodoList(newTodos)
  }
  function editTodo(id,updatedTodo){
    const updatedTodos=todoList.map((todo)=>{
      if(todo.id===id){
        return {...todo,task:updatedTodo}
      }
      return todo
    })
    setTodoList(updatedTodos)
  }
  function toggleCompleted(id){
    alert("toggletodo alert "+id)
  }
  return (
    <div>
      <AddTodo addTodo={addTodo}/>
      <DisplayTodo
        todos={todoList}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleCompleted={toggleCompleted}
      />
    </div>
  )
}

// export default class MessageList extends Component {
//   state={
//     messageList:[],
//     newMessage:""
//   }
//   handleChange=(e)=>{
//     this.setState({
//         [e.target.name]:e.target.value
//     })
//   }
//   add=()=>{
//     this.setState({
//        messageList:[...this.state.messageList,this.state.newMessage]
//     })
//   }
//   render() {
//     return (
//       <div>
//          <input 
//             type="text" 
//             name="newMessage"
//             onChange={this.handleChange}
//             value={this.state.newMessage}
//             placeholder='Enter a messsage' />
//         <button onClick={this.add}>Add Tdo</button>
//         {
//           this.state.messageList.map((p)=>(
//             <DisplayMessage todo={p}/>
//           ))
//         }
//       </div>
//     )
//   }
// }


