import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTasks, updateTask } from "../api";
import type { TaskStatus, Task } from "../types/Task";
import {
  Button,
  Container,
  Form,
  Spinner,
  Alert,
} from "react-bootstrap";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState<Task | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState<TaskStatus>("pending");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const tasks = await getTasks();
        const found = tasks.find((t) => t.id === id);
        if (!found) {
          setError("Tarea no encontrada");
        } else {
          setTask(found);
          setTitle(found.title);
          setDescription(found.description);
          setCompleted(found.completed);
        }
      } catch (err) {
        setError("Error al obtener la tarea");
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!task) return;

    try {
      await updateTask(task.id, { title, description, completed });
      navigate("/");
    } catch (err) {
      console.error("Error al actualizar tarea:", err);
      setError("No se pudo actualizar la tarea");
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger" className="mt-3 text-center">{error}</Alert>;
  }

  return (
    <Container className="mt-4">
      <h2>Editar Tarea</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Estado</Form.Label>
          <Form.Select
            value={completed}
            onChange={(e) => setCompleted(e.target.value as TaskStatus)}
          >
            <option value="pending">Pendiente</option>
            <option value="in_progress">En Progreso</option>
            <option value="done">Completada</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="primary">Guardar Cambios</Button>
      </Form>
    </Container>
  );
};

export default EditTask;
