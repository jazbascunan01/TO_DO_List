import { useEffect, useState } from 'react';
import { getTasks } from '../services/api';

function Summary() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  return (
    <div className="page">
      <h2>Resumen General</h2>
      <p>Esta aplicación te ayuda a gestionar tareas y mejorar tu productividad.</p>
      <p>Has creado {tasks.length} tareas hasta ahora.</p>
    </div>
  );
}

export default Summary;
