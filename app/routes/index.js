import express from 'express';

import userRoutes from './user.routes';

const router = express.Router(); // eslint-disable-line new-cap
router.use('/users', userRoutes);

export default router;
