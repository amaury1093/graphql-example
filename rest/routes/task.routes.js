import express from 'express';
import taskController from '../controllers/task.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/tasks - Get list of tasks */
  .get(taskController.list);

router.route('/:taskId')
  /** GET /api/tasks/:taskId - Get task */
  .get(taskController.get);

/** Load task when API with taskId route parameter is hit */
router.param('taskId', taskController.load);

export default router;
