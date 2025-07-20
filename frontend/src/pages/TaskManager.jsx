import { useEffect, useState } from 'react';
import { getTasks } from '../services/api';
import TaskList from '../components/TaskList';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTasks().then(data => {
      setTasks(data);
      setLoading(false);
    });
  }, []);

  const filtered = tasks
    .filter(task => filter === 'all' || (filter === 'completed' ? task.completed : !task.completed))
    .filter(task => task.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="page">
      <h2>Mis Tareas</h2>

      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filters">
        <button onClick={() => setFilter('all')}>Todas</button>
        <button onClick={() => setFilter('pending')}>Pendientes</button>
        <button onClick={() => setFilter('completed')}>Completadas</button>
      </div>

      {loading ? <p>Cargando...</p> : <TaskList tasks={filtered} setTasks={setTasks} />}
    </div>
  );
}

export default TaskManager;