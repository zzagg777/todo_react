import { useState } from 'react'
import './styles/global.css'
import Header from './components/Header.jsx'
import TodoForm from './components/TodoForm.jsx'
import TodoStats from './components/TodoStats.jsx'
import TodoList from './components/TodoList.jsx'
import Timer from './components/Timer.jsx'
import { getStorage, saveStorage, deleteAllStorage } from './utils/storage.js' // localStorage
function App() {
  const [todos, setTodos] = useState(getStorage("todos") || []); // 로컬스토리지에서 초기값 불러오기
  const [tab, setTab] = useState("all");
  let showtodos = todos;
  // console.log(todos);
  // console.log(tab);
  if(tab === "all"){
    showtodos = todos;
  }
  if(tab === "ing"){
    showtodos = todos.filter(todo => !todo.done);
    // console.log(showtodos);
  }
  if(tab === "done"){
    showtodos = todos.filter(todo => todo.done);
    // console.log(showtodos);
  }

  // Todo 추가
  const addTodo = (text) => {
      const newTodo = {
        id: Date.now(),
        text: text,
        done: false,
      };
      setTodos(prev => [...prev, newTodo]); // Todo 업데이트
      saveStorage("todos", [...todos, newTodo]); // 로컬스토리지에 저장
  }

  // Todo 삭제
  const deleteTodo = (id) => {
    const newTodo = todos.filter(todo => todo.id !== id);
    setTodos(newTodo);
    saveStorage("todos", newTodo);
  }

  // Todo 토글 (완료/미완료)
  const toggleTodo = (id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newTodo);
    saveStorage("todos", newTodo);
  };

  // Todo 수정
  const changeTodo = (id, text) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        if(text.trim() === "") return todo; // 유효성 검사
        return { ...todo, text: text };
      }
      return todo;
    });
    setTodos(newTodo);
    saveStorage("todos", newTodo);
  }

  const deleteTodoAll = () => {
    deleteAllStorage("todos");
    setTodos([]); 
  }

    


  



  return (
    <main className='container'>
      <div className="todo">
        {/* 앱 제목 */}
        <Header />
        {/* 추가폼 - 할 일 추가, 검증(useRef) */}
        <TodoForm onAdd={addTodo} /> 
        {/* 파생값 표시(전체/진행/완료 개수), 완료만 보기 토글, 필터 기능  */}
        <TodoStats todos={todos} setTodos={setTodos} tab={tab} setTab={setTab} onDeleteAll={deleteTodoAll} />
        {/* 목록 렌더링 - 할 일 삭제, 완료 토글, 빈 상태 UI */}
        <TodoList todos={showtodos} setTodos={setTodos} tab={tab} onToggle={toggleTodo} onDelete={deleteTodo} onModify={changeTodo} />

        {/* 타이머 */}
        <Timer />
      </div>
    </main>
  )

  
}

export default App
