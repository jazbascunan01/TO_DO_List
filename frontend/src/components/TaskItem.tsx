import type { Task } from '../types/Task';
import { updateTask } from '../api';

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onUpdate: () => void;
}

export default function TaskItem({ task, onDelete, onUpdate }: Props) {
  const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    await updateTask({ ...task, completed: e.target.value as Task['completed'] });
    onUpdate();
  };

  return (
    <div style={{ border: '1px solid gray', margin: '0.5rem', padding: '1rem' }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <select value={task.completed} onChange={handleStatusChange}>
        <option value="pending">Pendiente</option>
        <option value="in_progress">En progreso</option>
        <option value="done">Completada</option>
      </select>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
}
