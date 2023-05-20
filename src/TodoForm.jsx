import { useState } from "react"


const TodoForm = ({ addTask }) => {
  const [userInput,setUserInput] = useState('')
  const handleChange = (e) => {
  setUserInput(e.currentTarget.value)
 }

  const handleSubmit = (e)=>{
  e.preventDefault()
  addTask(userInput)
  setUserInput('')
 }

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit} >
        <label className="form-label">
          Add new task
        </label>
        <input className="form-control" value={userInput} onChange={handleChange} type="text" placeholder="input task" />
        <button className="btn btn-primary addtsk" type="submit"> add task</button>
      </form>
    </div>

  )
}

export default TodoForm