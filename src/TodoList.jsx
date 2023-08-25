import Todo from "./Todo"
const TodoList = ({todoList, handleToggle, handleFilter}) => {

  return(
    <div className="col " >
      {todoList.map((todo) => {
        return(
          <Todo todo={todo} handleToggle = {handleToggle} handleFilter={handleFilter} key={todo.id + todo.task} />
        )
      })}
      <div className="text-center">
        <button className="btn delete" onClick={handleFilter}>Delete completed tasks</button>
      </div>
      
    </div>
  )
}
export default TodoList