import { useState } from 'react'
import '../styles/todo-stats.css'

function TodoStats() {
  const [todos, setTodos] = useState(0)

  return (
      <div className="todo-info">
        <div className="todo-tab">
            <button className="btn active" data-filter="all">전체 (<span id="totalCount">0</span>)</button>
            <button className="btn" data-filter="ing">진행중 (<span id="ingCount">0</span>)</button>
            <button className="btn" data-filter="done">완료 (<span id="doneCount">0</span>)</button>
        </div>
        <button id="todo-delete-all">전체삭제</button>
      </div>
  )
}

export default TodoStats
