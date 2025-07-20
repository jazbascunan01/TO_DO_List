function TaskItem({ task, setTasks }) {
  const toggleComplete = () => {
    fetch(`${import.meta.env.VITE_API_URL}/tasks/${task.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !task.completed }),
    })
      .then(res => res.json())
      .then(updatedTask => {
        setTasks(prev => prev.map(t => (t.id === task.id ? updatedTask : t)))
      })
      .catch(err => console.error('Error al marcar tarea:', err))
  }

  const handleDelete = () => {
    fetch(`${import.meta.env.VITE_API_URL}/tasks/${task.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setTasks(prev => prev.filter(t => t.id !== task.id))
      })
      .catch(err => console.error('Error al eliminar tarea:', err))
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleComplete}
        />
        <span>{task.title}</span>
      </label>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  )
}

export default TaskItem
