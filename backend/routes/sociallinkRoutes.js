import express from 'express';
import { sociallinkController } from '../controllers/sociallinkController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(sociallinkController.getAll)
  .post(protect, admin, sociallinkController.createOne);

router.route('/:id')
  .get(sociallinkController.getOne)
  .put(protect, admin, sociallinkController.updateOne)
  .delete(protect, admin, sociallinkController.deleteOne);

export default router;
