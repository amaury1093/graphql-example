import express from 'express';
import projectController from '../controllers/project.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/projects - Get list of projects */
  .get(projectController.list);

router.route('/:projectId')
  /** GET /api/projects/:projectId - Get project */
  .get(projectController.get);

/** Load project when API with projectId route parameter is hit */
router.param('projectId', projectController.load);

export default router;
