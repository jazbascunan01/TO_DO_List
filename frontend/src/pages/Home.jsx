import { useState, useEffect } from 'react'
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'

function Home() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('') // <-- NUEVO

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [])

  // Filtrado por estado y por texto
  const filteredTasks = tasks
    .filter(task => {
      if (filter === 'completed') return task.completed
      if (filter === 'pending') return !task.completed
      return true
    })
    .filter(task =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="home">
      <h1>App de Tareas</h1>

      <TaskForm setTasks={setTasks} />

      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar tareas..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Botones de filtro */}
      <div className="filters">
        <button onClick={() => setFilter('all')}>Todas</button>
        <button onClick={() => setFilter('pending')}>Pendientes</button>
        <button onClick={() => setFilter('completed')}>Completadas</button>
      </div>

      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  )
}

export default Home
