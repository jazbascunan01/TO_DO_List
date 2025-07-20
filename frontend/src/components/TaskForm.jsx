import { useState } from 'react';
import { createTask } from '../services/api';

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim().length < 3) {
      setError('La tarea debe tener al menos 3 caracteres');
      return;
    }
    const newTask = await createTask(title);
    onTaskAdded(newTask);
    setTitle('');
    setError('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Nueva tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Agregar</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default TaskForm;