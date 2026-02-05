import { useState } from 'react'
import '../styles/todo-list.css'

function TodoList() {
  const [todos, setTodos] = useState(0)

  return (
    <ul className="todo-list">
        <li className="todo-item"><span className="check-box">
              <input type="checkbox" id="todoChk-0" hidden />
              <label htmlFor="todoChk-0" className="todo-done"></label>
            </span>
            <p>gg</p>
            <button className="todo-delete material-symbols-outlined">close</button>
        </li>      
    </ul>   
  )
}

export default TodoList
