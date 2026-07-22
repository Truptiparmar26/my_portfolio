import express from 'express';
import { aiprojectController } from '../controllers/aiprojectController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(aiprojectController.getAll)
  .post(protect, admin, aiprojectController.createOne);

router.route('/:id')
  .get(aiprojectController.getOne)
  .put(protect, admin, aiprojectController.updateOne)
  .delete(protect, admin, aiprojectController.deleteOne);

export default router;
