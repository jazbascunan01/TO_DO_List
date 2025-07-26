import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks, deleteTask } from "../api";  // <-- import deleteTask
import type { Task, TaskStatus } from "../types/Task";
import { Container, Row, Col, Badge, Card, Spinner, Button } from "react-bootstrap";

const Home = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await getTasks();
                console.log("TAREAS CARGADAS:", data);
                setTasks(data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const handleDelete = async (id: string) => {
        if (!window.confirm("¿Estás seguro que querés eliminar esta tarea?")) return;

        try {
            await deleteTask(id);
            // Actualizar estado local quitando la tarea eliminada
            setTasks((prev) => prev.filter((task) => task.id !== id));
        } catch (error) {
            console.error("Error al eliminar tarea:", error);
            alert("No se pudo eliminar la tarea.");
        }
    };

    const groupByStatus = (status: TaskStatus) =>
        tasks.filter(
            (task) =>
                typeof task.completed === "string" &&
                task.completed.toLowerCase() === status
        );

    const statuses: TaskStatus[] = ["pending", "in_progress", "done"];

    return (
        <Container className="mt-4">
            <h2 className="mb-4 text-center">Inicio - Tareas por estado</h2>
            {loading ? (
                <div className="text-center">
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : (
                <Row>
                    {statuses.map((status) => {
                        const tasksByStatus = groupByStatus(status);
                        const statusLabel =
                            status === "pending"
                                ? "Pendiente"
                                : status === "in_progress"
                                    ? "En progreso"
                                    : "Completada";

                        const badgeVariant =
                            status === "pending"
                                ? "warning"
                                : status === "in_progress"
                                    ? "info"
                                    : "success";

                        return (
                            <Col md={4} key={status} className="mb-4">
                                <Card className="shadow-sm">
                                    <Card.Header className="d-flex justify-content-between align-items-center">
                                        <span>{statusLabel}</span>
                                        <Badge pill bg={badgeVariant}>
                                            {tasksByStatus.length}
                                        </Badge>
                                    </Card.Header>
                                    <Card.Body>
                                        {tasksByStatus.length > 0 ? (
                                            tasksByStatus.map((task) => (
                                                <Card key={task.id} className="mb-2">
                                                    <Card.Body className="p-2">
                                                        <strong>{task.title}</strong>
                                                        <div className="text-muted small">{task.description}</div>
                                                        <div className="mt-2 text-end">
                                                            <Button
                                                                variant="outline-primary"
                                                                size="sm"
                                                                className="me-2"
                                                                onClick={() => navigate(`/edit/${task.id}`)}
                                                            >
                                                                Editar
                                                            </Button>
                                                            <Button
                                                                variant="outline-danger"
                                                                size="sm"
                                                                onClick={() => handleDelete(task.id)}
                                                            >
                                                                Eliminar
                                                            </Button>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            ))
                                        ) : (
                                            <div className="text-muted">No hay tareas</div>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            )}
        </Container>
    );
};

export default Home;
