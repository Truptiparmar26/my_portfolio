import express from 'express';
import { projectController } from '../controllers/projectController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(projectController.getAll)
  .post(protect, admin, projectController.createOne);

router.route('/:id')
  .get(projectController.getOne)
  .put(protect, admin, projectController.updateOne)
  .delete(protect, admin, projectController.deleteOne);

export default router;
