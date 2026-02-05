import { useState } from 'react'
import '../styles/header.css'

function Header() {
  const [todos, setTodos] = useState(0)

  return (
    <header className='header'>
      <h1 className='header__title'>To Do List</h1>
      <p>
        오늘의 할일을 관리해보아요~
      </p>
    </header>
  )
}

export default Header
