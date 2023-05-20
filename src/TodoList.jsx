import Todo from "./Todo"
const TodoList = ({todoList, handleToggle, handleFilter}) => {

  return(
    <div className="col text-center" >
      {todoList.map((todo) => {
        return(
          <Todo todo={todo} handleToggle = {handleToggle} handleFilter={handleFilter} key={todo.id + todo.task} />
        )
      })}
      <button className="btn btn-info delete" onClick={handleFilter}>Delete completed tasks</button>
    </div>
  )
}
export default TodoList