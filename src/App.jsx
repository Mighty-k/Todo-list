import 'bootstrap/dist/css/bootstrap.min.css';
import data from"./data.json";
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useState } from 'react';


const App = () => {
    const [todoList, setTodoList] = useState(data)
    const handleToggle = (id) =>{
        let mapped = todoList.map(task => {
          return task.id === Number(id) ? {...task, complete : !task.complete }:{...task}
        } )
        setTodoList(mapped)
    }
    const handleFilter = ()=> {
      let filtered = todoList.filter(task =>{
        return !task.complete
      })
      setTodoList(filtered)
    }
    const addTask = (userInput)=>{
      let copy = [...todoList]
      copy = [...copy,{id:todoList.length + 1, task:userInput, complete:false}]
      setTodoList(copy)
    }

  return(
    <div className='container'>
      <div className="row gx-1">
      <div className="col todo-col">
      <img src="src/img/todo.webp" alt="todo img" />
      </div>
      <div className='container app col'>
     <header className='container-sm text-center'>TO DO LIST</header>
      <div className='container' id='todo'>
     <TodoForm addTask={addTask} />
     <TodoList todoList={todoList} handleToggle = {handleToggle} handleFilter={handleFilter}/>
      </div>
   </div>
   
      </div>
      
    </div>
    
   
  )
}

export default App
