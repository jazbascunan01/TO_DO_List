import { useEffect, useState } from 'react';
import { getTasks } from '../services/api';

function Stats() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="page">
      <h2>Estadísticas</h2>
      <ul>
        <li>Total de tareas: {total}</li>
        <li>Tareas completadas: {completed}</li>
        <li>Tareas pendientes: {pending}</li>
        <li>Progreso: {percent}%</li>
      </ul>
      <div style={{
        background: '#eee',
        borderRadius: '5px',
        overflow: 'hidden',
        height: '20px',
        marginTop: '1rem'
      }}>
        <div style={{
          width: `${percent}%`,
          background: 'green',
          height: '100%',
          transition: 'width 0.3s'
        }}></div>
      </div>
    </div>
  );
}

export default Stats;
