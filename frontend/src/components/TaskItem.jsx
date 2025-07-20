import { deleteTask, toggleComplete } from '../services/api';

function TaskItem({ task, onToggle, onDelete }) {
  const handleToggle = async () => {
    const updated = await toggleComplete(task.id, !task.completed);
    onToggle(updated);
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    onDelete(task.id);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label>
        <input type="checkbox" checked={task.completed} onChange={handleToggle} />
        <span>{task.title}</span>
      </label>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default TaskItem;