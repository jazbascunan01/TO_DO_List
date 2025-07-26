import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../api";
import type { TaskStatus } from "../types/Task";
import {
    Container,
    Form,
    Button,
    Card,
    Alert,
    Row,
    Col,
} from "react-bootstrap";

const AddTask = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<TaskStatus>("pending");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim()) {
            setError("El título es obligatorio.");
            return;
        }

        try {
            await createTask({
                title,
                description,
                completed: status,
            });


            navigate("/");
        } catch (err) {
            console.error(err);
            setError("Hubo un error al crear la tarea.");
        }
    };

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3 className="mb-4 text-center">Crear nueva tarea</h3>

                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="title">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingrese el título de la tarea"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="description">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Ingrese una descripción"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="status">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value as TaskStatus)}
                                    >
                                        <option value="pending">Pendiente</option>
                                        <option value="in_progress">En progreso</option>
                                        <option value="done">Completada</option>
                                    </Form.Select>
                                </Form.Group>

                                <div className="text-center">
                                    <Button type="submit" variant="primary">
                                        Crear Tarea
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AddTask;
