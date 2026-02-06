import { useState } from 'react'
import './styles/global.css'
import Header from './components/Header.jsx'
import TodoForm from './components/TodoForm.jsx'
import TodoStats from './components/TodoStats.jsx'
import TodoList from './components/TodoList.jsx'
import { getStorage, saveStorage, deleteAllStorage } from './utils/storage.js'
function App() {
  const [todos, setTodos] = useState(getStorage("todos") || []); // 로컬스토리지에서 초기값 불러오기
  const [tab, setTab] = useState("all");
  // console.log(todos);
  let showtodos = todos;
  console.log(tab);
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

  const deleteTodoAll = () => {
    deleteAllStorage("todos");
    setTodos([]); 
  }

    


  



  return (
    <main className='container'>
      <div className="todo">
        <Header />
        <TodoForm onAdd={addTodo} /> 
        <TodoStats todos={todos} setTodos={setTodos} tab={tab} setTab={setTab} onDeleteAll={deleteTodoAll} />
        <TodoList todos={showtodos} setTodos={setTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </main>
  )

  
}

export default App
