import type { Task } from './types/Task';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/tasks';

export const getTasks = async (): Promise<Task[]> => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createTask = async (task: Omit<Task, 'id' | 'createdAt'>): Promise<Task> => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  });
  return res.json();
};

export const updateTask = async (
  id: string,
  updatedFields: Partial<Omit<Task, "id">>
): Promise<Task> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, ...updatedFields }),
  });
  return res.json();
};

export const deleteTask = async (id: string): Promise<void> => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
