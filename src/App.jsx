import { useState } from 'react'
import './styles/global.css'
import Header from './components/Header.jsx'
import TodoForm from './components/TodoForm.jsx'
import TodoStats from './components/TodoStats.jsx'
import TodoList from './components/TodoList.jsx'
function App() {

  return (
    <main className='container'>
      <div className="todo">
        <Header />
        <TodoForm />
        <TodoStats />
        <TodoList />
      </div>
    </main>
  )
}

export default App
