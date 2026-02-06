import { useState, useRef } from "react";
import "../styles/todo-form.css";
import { debounce } from "lodash";


function TodoForm({onAdd}) {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");
  const inputRef = useRef(null);
  

  const handleFocus = () => { // 포커스
    inputRef.current?.focus();
  }

  const submit = (e) => { // 제출
    e.preventDefault();
    
    if (text.trim() === "") { // 유효성 검사
      setMsg("error");
      handleFocus();
      
      return false;
    };
    onAdd(text); // 입력값 전달
    setText(""); // 입력값 초기화
    setMsg(""); // 에러메시지 초기화
  };

  return (
    <>
    <form onSubmit={submit} className="todo-form">
      <input
        type="text"
        id="todo-input"
        placeholder="할일을 입력해주세요"
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={msg === "error" ? "error" : ""}  
      />
      <button id="todo-add" className="btn" type='submit'>
        추가
      </button>
    </form >
    </>
  );
}

export default TodoForm;
