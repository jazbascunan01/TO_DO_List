// backend/src/routes/taskRoutes.ts

import { Router } from 'express';
import {
  getAllTasks,
  postTask,
  putTask,
  deleteTaskById
} from '../controllers/taskController';

const router = Router();

router.get('/', getAllTasks);
router.post('/', postTask);
router.put('/:id', putTask);
router.delete('/:id', deleteTaskById);

export default router;  // <-- default export
