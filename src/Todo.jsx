
const Todo = ({todo,handleToggle}) => {

  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }

  return(
    <div className="todo-list">
      <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className =   {todo.complete ? "todo strike" : "todo"}>
          <p className="item">{todo.task}</p>  
        </div>
    </div>
    
  )
}
export default Todo