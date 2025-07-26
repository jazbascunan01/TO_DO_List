import { useEffect, useState } from "react";
import { getTasks } from "../api";
import type { Task, TaskStatus } from "../types/Task";
import { Container, Row, Col, Badge, Card, Spinner } from "react-bootstrap";

const Home = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await getTasks();
                console.log("TAREAS CARGADAS:", data); // 🔍 Verifica esto en consola
                setTasks(data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);


    const groupByStatus = (status: TaskStatus) =>
        tasks.filter((task) =>
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
