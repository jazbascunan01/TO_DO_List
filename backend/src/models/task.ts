// backend/src/models/task.ts

import { PrismaClient, TaskStatus } from '@prisma/client';

const prisma = new PrismaClient();

export const getTasks = async () => {
  return await prisma.task.findMany();
};

export const createTask = async (
  title: string,
  description: string,
  completed: TaskStatus
) => {
  return await prisma.task.create({
    data: {
      title,
      description,
      completed,
    },
  });
};


export const updateTask = async (id: string, updates: Partial<{ title: string; description: string; completed: TaskStatus }>) => {
  try {
    return await prisma.task.update({
      where: { id },
      data: updates,
    });
  } catch (error) {
    return null;
  }
};

export const deleteTask = async (id: string) => {
  try {
    await prisma.task.delete({
      where: { id },
    });
    return true;
  } catch {
    return false;
  }
};
