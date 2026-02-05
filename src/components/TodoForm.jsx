import { useState } from 'react'
import '../styles/todo-form.css'

function TodoForm() {
  const [todos, setTodos] = useState(0)

  return (
    <form action="" className="todo-form">
        <input type="text" id="todo-input" placeholder="할일을 입력하세요." />
        <button id="todo-add" className="btn">추가</button>
    </form>
  )
}

export default TodoForm
