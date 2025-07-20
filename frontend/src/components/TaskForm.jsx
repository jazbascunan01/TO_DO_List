import { useState, useEffect } from 'react';

function TaskForm({ onSubmit, initialTitle = '' }) {
  const [title, setTitle] = useState(initialTitle);
  const [error, setError] = useState('');

  useEffect(() => {
    setTitle(initialTitle);
  }, [initialTitle]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim().length < 3) {
      setError('La tarea debe tener al menos 3 caracteres');
      return;
    }
    await onSubmit(title);
    setTitle('');
    setError('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Escribí tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Guardar</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default TaskForm;