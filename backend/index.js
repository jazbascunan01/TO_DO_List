// index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Cargar variables de entorno

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Array temporal para almacenar tareas
let tasks = [];

// Rutas
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const { title, completed } = req.body;
  if (!title) return res.status(400).json({ error: 'Título requerido' });

  const newTask = {
    id: Date.now(),
    title,
    completed: completed || false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const task = tasks.find(t => t.id == id);
  if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id == id);
  if (index === -1) return res.status(404).json({ error: 'Tarea no encontrada' });

  tasks.splice(index, 1);
  res.status(204).send();
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
