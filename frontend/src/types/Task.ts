export type TaskStatus = 'pending' | 'in_progress' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: TaskStatus;
  createdAt: string;
}
