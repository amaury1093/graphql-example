import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  .get(userController.list);

router.route('/:userId')
  /** GET /api/users/:userId - Get user */
  .get(userController.get);

router.route('/:userId/projects')
  /** GET /api/users/:userId/projects - List projects of user */
  .get(userController.listProjects);

/** Load user when API with userId route parameter is hit */
router.param('userId', userController.load);

export default router;
