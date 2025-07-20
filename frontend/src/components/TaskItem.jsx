import { deleteTask, toggleComplete } from '../services/api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function TaskItem({ task, onToggle, onDelete }) {
  const handleToggle = async () => {
    const updated = await toggleComplete(task.id, !task.completed);
    onToggle(updated);
    toast.info('Tarea actualizada');
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    onDelete(task.id);
    toast.error('Tarea eliminada');
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label>
        <input type="checkbox" checked={task.completed} onChange={handleToggle} />
        <span>{task.title}</span>
      </label>
      <div className="actions">
        <Link to={`/edit/${task.id}`}>Editar</Link>
        <button onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  );
}

export default TaskItem;
