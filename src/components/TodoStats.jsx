import '../styles/todo-stats.css'

function TodoStats({todos, tab, setTab, onDeleteAll}) {
  const totalCount = todos.length;
  const ingCount = todos.filter(todo => !todo.done).length;
  const doneCount = todos.filter(todo => todo.done).length;

  return (
      <div className="todo-info">
        <div className="todo-tab">
            <button className={`btn ${tab === "all" ? "active" : ""}`} data-filter="all" onClick={()=>{setTab('all')}}>전체 (<span id="totalCount">{totalCount}</span>)</button>
            <button className={`btn ${tab === "ing" ? "active" : ""}`} data-filter="ing" onClick={()=>{setTab('ing')}}>진행중 (<span id="ingCount">{ingCount}</span>)</button>
            <button className={`btn ${tab === "done" ? "active" : ""}`} data-filter="done" onClick={()=>{setTab('done')}}>완료 (<span id="doneCount">{doneCount}</span>)</button>
        </div>
        <button id="todo-delete-all" onClick={onDeleteAll}>전체삭제</button>
      </div>
  )
}

export default TodoStats
