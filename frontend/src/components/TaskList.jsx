import TaskItem from './TaskItem';

function TaskList({ tasks, setTasks }) {
  const handleToggle = (updatedTask) => {
    setTasks(prev => prev.map(t => t.id === updatedTask.id ? updatedTask : t));
  };

  const handleDelete = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
