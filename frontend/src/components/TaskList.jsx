import { useEffect, useState } from 'react'
import TaskItem from './TaskItem'

function TaskList() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error('Error al obtener tareas:', err))
  }, [])

  return (
    <div className="task-list">
      <h2>Lista de tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} setTasks={setTasks} />
        ))
      )}
    </div>
  )
}

export default TaskList
