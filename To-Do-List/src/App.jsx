import Head from "./components/head"
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
function App() {
       const todoItems=[{name:'buy milk',
       duedate:'3/3/2025'},
       {name:'goto college',
       duedate:'4/3/2025'}]

   return (
   <center className="todo-container">
    <Head></Head>
     <TodoItems todoDate={TodoItems.dueDate} todoName={TodoItems.name}></TodoItems>
    
   </center>
   )
}

export default App
