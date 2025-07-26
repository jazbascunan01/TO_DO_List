import { useEffect, useState } from "react";
import type { Task } from "../types/Task";
import { getTasks } from "../api";

export default function Stats() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const total = tasks.length;
  const pending = tasks.filter((t) => t.completed.toLowerCase()  === "pending").length;
  const inProgress = tasks.filter((t) => t.completed.toLowerCase()  === "in_progress").length;
  const done = tasks.filter((t) => t.completed.toLowerCase()  === "done").length;
  const donePercent = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">📊 Estadísticas</h2>
      <div className="card bg-light">
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">📝 Total de tareas: {total}</li>
            <li className="list-group-item">⏳ Pendientes: {pending}</li>
            <li className="list-group-item">🚧 En progreso: {inProgress}</li>
            <li className="list-group-item">✅ Completadas: {done}</li>
            <li className="list-group-item">📈 Porcentaje completado: {donePercent}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
