import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoAddForm from './TodoAddForm';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    axios.get('http://localhost/api/get_todos.php')
      .then(res => setTodos(res.data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <TodoAddForm onAdd={fetchTodos} />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.task} {todo.done ? '(完了)' : ''}
          </li>
        ))}
      </ul>
    </>
  );
}
