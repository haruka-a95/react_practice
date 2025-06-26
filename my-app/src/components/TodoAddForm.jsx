import { useState } from 'react';
import axios from 'axios';

export default function TodoAddForm({ onAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    axios.post('http://localhost/api/add_todo.php', {
      task: task
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      setTask('');
      onAdd();
    })
    .catch(err => {
      console.error('ToDo追加失敗:', err);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="新しいタスク"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
}