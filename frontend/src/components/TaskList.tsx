import { useEffect, useState } from 'react';
import type { Task } from '../types/Task';
import { getTasks, deleteTask } from '../api';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskForm onTaskAdded={fetchTasks} />
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={handleDelete} onUpdate={fetchTasks} />
      ))}
    </div>
  );
}
