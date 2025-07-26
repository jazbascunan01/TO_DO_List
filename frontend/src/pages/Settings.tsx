import { Container, Card, ListGroup } from "react-bootstrap";

const Settings = () => {
  return (
    <Container className="mt-4">
      <Card className="shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
        <Card.Body>
          <h2 className="mb-4 text-center">Configuración</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Versión de la aplicación:</strong> 1.0.0
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Autor:</strong> Karen Jazmín Bascuñan
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Licencia:</strong> MIT
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Fecha de creación:</strong> 26 de julio de 2025
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Funcionalidades:</strong>
              <ul className="mb-0 mt-2">
                <li>Crear, editar y eliminar tareas</li>
                <li>Filtrar tareas por estado</li>
                <li>Ver estadísticas de tareas</li>
              </ul>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Settings;
