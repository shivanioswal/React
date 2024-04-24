import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import './App.css';

function App() {
  
  return (
    <center className='todo-container'>
      <AppName/>
      <AddTodo/><br/>
      <div className="items-conatiner">
      <TodoItem1/> <br/>
      <TodoItem2/>
      </div>
      

  
    </center>
  )
}

export default App
