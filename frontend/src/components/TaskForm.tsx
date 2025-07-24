import { useState } from 'react';
import { createTask } from '../api';

interface Props {
  onTaskAdded: () => void;
}

export default function TaskForm({ onTaskAdded }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'pending' | 'in_progress' | 'done'>('pending');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTask({ title, description, completed: status });
    setTitle('');
    setDescription('');
    setStatus('pending');
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" required />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" required />
      <select value={status} onChange={(e) => setStatus(e.target.value as any)}>
        <option value="pending">Pendiente</option>
        <option value="in_progress">En progreso</option>
        <option value="done">Completada</option>
      </select>
      <button type="submit">Agregar</button>
    </form>
  );
}
