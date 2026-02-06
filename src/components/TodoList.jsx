import "../styles/todo-list.css";

function TodoList({ todos, setTodos, onToggle, onDelete  }) {
  if(todos.length === 0){ // Todo가 없을 때
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
        />
      ))}
    </ul>
  );
}

function TodoItem({ todos, onToggle, onDelete}) {
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
      <p>{text}</p>
      <button className="todo-delete material-symbols-outlined" onClick={() => onDelete(id)}>close</button>
    </li>
  );
}

export default TodoList;
