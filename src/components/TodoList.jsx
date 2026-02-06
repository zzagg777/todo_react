import "../styles/todo-list.css";

function TodoList({ todos, setTodos, onToggle, onDelete, tab, onModify  }) {
  if(todos.length === 0){ // Todo가 없을 때
    if(tab === "ing") return <p className="todo-list__empty">진행중인 할일이 없습니다.</p>
    if(tab === "done") return <p className="todo-list__empty">완료된 할일이 없습니다.</p>
    return <p className="todo-list__empty">등록된 할일이 없습니다.</p>
  }

  return ( // Todo 목록
    <ul className="todo-list">
      {todos.map((item) => ( // Todo item
        <TodoItem
          key={item.id}
          todos={item}
          setTodos={setTodos}
          onToggle={onToggle}
          onDelete={onDelete}
          onModify={onModify}
        />
      ))}
    </ul>
  );
}

function TodoItem({ todos, onToggle, onDelete, onModify}) {
  const { id, text, done } = todos;

  return (
    <li className={`todo-item ${done ? "done" : ""}`}>
      <span className="check-box">
        <input
          type="checkbox"
          id={`todoChk-${id}`}
          hidden
          checked={done}
          onChange={() => onToggle(id)}
        />
        <label
          htmlFor={`todoChk-${id}`}
          className={`todo-${done ? "done" : ""}`}
        ></label>
      </span>
      {/* <p>{text}</p> */}
      <input type="text" value={text} disabled={done} onChange={(e) => onModify(id, e.target.value)} />
      <button className="todo-delete material-symbols-outlined" onClick={() => onDelete(id)}>close</button>
    </li>
  );
}

export default TodoList;
