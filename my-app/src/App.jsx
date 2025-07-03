import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import TodoList from './components/ToDoList'
import UserList from './components/UserList'
import Home from './components/Home';
import Counter from './components/Counter';
import UserForm from './components/UserForm';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : undefined}>ホーム</NavLink>
        <NavLink to="/todo" className={({ isActive }) => isActive ? "active-link" : undefined}>ToDo</NavLink>
        <NavLink to="/users" className={({ isActive }) => isActive ? "active-link" : undefined}>ユーザー一覧</NavLink>
        <NavLink to="counter" className={({ isActive }) => isActive ? "active-link" : undefined}>カウント</NavLink>
        <NavLink to="user/add" className={({ isActive }) => isActive ? "active-link" : undefined}>ユーザー追加</NavLink>
      </nav>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/counter" element={<Counter />} />
      <Route path='/user/add' element={<UserForm />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
