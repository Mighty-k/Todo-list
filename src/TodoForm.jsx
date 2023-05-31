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
      <form className="row g-3 form" onSubmit={handleSubmit} >
        <div className="col">
        <input className="form-control inp" value={userInput} onChange={handleChange} type="text" placeholder="input task" />
        </div>
        <div className="col-auto">
        <button className="btn btn-primary addtsk" type="submit"> add task</button>
        </div>
      </form>
    </div>

  )
}

export default TodoForm