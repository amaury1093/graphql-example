import express from 'express';

import userRoutes from './user.routes';
import projectRoutes from './project.routes';
import taskRoutes from './task.routes';

const router = express.Router(); // eslint-disable-line new-cap
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/tasks', taskRoutes);

export default router;
