import TaskForm from '../components/TaskForm';
import { useNavigate } from 'react-router-dom';
import { createTask } from '../services/api';

function NewTask() {
  const navigate = useNavigate();

  const handleSubmit = async (title) => {
    await createTask(title);
    navigate('/tasks');
  };

  return (
    <div className="page">
      <h2>Nueva Tarea</h2>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
}

export default NewTask;