// index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./database/db');

dotenv.config(); // Cargar variables de entorno

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
// GET todas las tareas
app.get('/api/tasks', (req, res) => {
  const tasks = db.prepare('SELECT * FROM tasks').all()
  const parsedTasks = tasks.map(t => ({
    ...t,
    completed: Boolean(t.completed),
  }))
  res.json(parsedTasks)
})

// POST crear tarea
app.post('/api/tasks', (req, res) => {
  const { title, description } = req.body
  if (!title) return res.status(400).json({ error: 'Título requerido' })

  const stmt = db.prepare('INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)')
  const info = stmt.run(title, description || '', 0) // Usamos un string vacío si no hay descripción

  // Devolvemos la tarea recién creada consultándola para obtener todos los campos
  const newTask = db.prepare('SELECT * FROM tasks WHERE id = ?').get(info.lastInsertRowid)
  
  res.status(201).json(newTask)
})

// PUT actualizar tarea
app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params
  const { title, description, completed } = req.body

  const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id)
  if (!task) return res.status(404).json({ error: 'Tarea no encontrada' })

  const updatedTitle = title ?? task.title
  const updatedDescription = description ?? task.description
  const updatedCompleted = completed !== undefined ? Number(completed) : task.completed

  db.prepare('UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?')
    .run(updatedTitle, updatedDescription, updatedCompleted, id)

  const updatedTask = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id)
  res.json(updatedTask)
})

// DELETE eliminar
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params
  const info = db.prepare('DELETE FROM tasks WHERE id = ?').run(id)

  if (info.changes === 0) return res.status(404).json({ error: 'Tarea no encontrada' })
  res.status(204).send()
})


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
