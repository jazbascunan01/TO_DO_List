import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import { getTasks, updateTask } from '../services/api';
import { toast } from 'react-toastify';

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTasks().then(tasks => {
      const task = tasks.find(t => t.id === Number(id));
      if (task) setTitle(task.title);
      setLoading(false);
    });
  }, [id]);

  const handleSubmit = async (newTitle) => {
    await updateTask(id, { title: newTitle });
    toast.success('Tarea actualizada');
    navigate('/tasks');
  };

  if (loading) return <p>Cargando tarea...</p>;

  return (
    <div className="page">
      <h2>Editar Tarea</h2>
      <TaskForm initialTitle={title} onSubmit={handleSubmit} />
    </div>
  );
}

export default EditTask;