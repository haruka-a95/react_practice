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

  const markAsDone = (id) =>{
    axios.post('http://localhost/api/update_todo.php',{
      id,
      done:true
    }).then(()=>{
      fetchTodos();
    }).catch(console.error);
  }

  return (
    <>
      <TodoAddForm onAdd={fetchTodos} />
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{
              textDecoration: todo.done ? 'line-through' : 'none',
              color: todo.done ? '#888' : '#000'}}>
            {todo.task}
            {!todo.done && (
              <button onClick={() => markAsDone(todo.id)} style={{ marginLeft: '10px' }}>
                完了
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
