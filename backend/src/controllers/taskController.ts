// backend/src/controllers/taskController.ts

import { Request, Response } from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../models/task';

export const getAllTasks = (req: Request, res: Response) => {
  res.json(getTasks());
};

export const postTask = (req: Request, res: Response) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Faltan campos obligatorios.' });
  }
  const newTask = createTask(title, description);
  res.status(201).json(newTask);
};

export const putTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;
  const updated = updateTask(id, updates);
  if (!updated) {
    return res.status(404).json({ error: 'Tarea no encontrada.' });
  }
  res.json(updated);
};

export const deleteTaskById = (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = deleteTask(id);
  if (!deleted) {
    return res.status(404).json({ error: 'Tarea no encontrada.' });
  }
  res.json({ message: 'Tarea eliminada correctamente.' });
};
