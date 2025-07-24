// backend/src/controllers/taskController.ts

import { Request, Response } from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../models/task';
import type { TaskStatus } from '@prisma/client'; // Importá sólo el tipo aquí

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await getTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
};

export const postTask = async (req: Request, res: Response) => {
  const { title, description, completed } = req.body;

  if (!title || !description || !completed) {
    return res.status(400).json({ error: 'Faltan campos obligatorios.' });
  }

  // Convierte el string recibido a mayúsculas y con guion bajo para coincidir con TaskStatus
  const status = (completed as string).toUpperCase().replace('-', '_') as TaskStatus;

  try {
    const newTask = await createTask(title, description, status);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
};

export const putTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  // Convertir completed si está en updates para que coincida con TaskStatus
  if (updates.completed) {
    updates.completed = (updates.completed as string).toUpperCase().replace('-', '_') as TaskStatus;
  }

  try {
    const updated = await updateTask(id, updates);
    if (!updated) {
      return res.status(404).json({ error: 'Tarea no encontrada.' });
    }
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la tarea' });
  }
};

export const deleteTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleted = await deleteTask(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Tarea no encontrada.' });
    }
    res.json({ message: 'Tarea eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
};
