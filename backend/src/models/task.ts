// backend/src/models/task.ts

import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

let tasks: Task[] = [];

export const getTasks = (): Task[] => tasks;

export const createTask = (title: string, description: string): Task => {
  const newTask: Task = {
    id: uuidv4(),
    title,
    description,
    completed: false,
    createdAt: new Date()
  };
  tasks.push(newTask);
  return newTask;
};

export const updateTask = (id: string, updates: Partial<Task>): Task | null => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return null;
  tasks[index] = { ...tasks[index], ...updates };
  return tasks[index];
};

export const deleteTask = (id: string): boolean => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};
