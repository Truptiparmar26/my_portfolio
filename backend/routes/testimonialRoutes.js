import express from 'express';
import { testimonialController } from '../controllers/testimonialController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(testimonialController.getAll)
  .post(protect, admin, testimonialController.createOne);

router.route('/:id')
  .get(testimonialController.getOne)
  .put(protect, admin, testimonialController.updateOne)
  .delete(protect, admin, testimonialController.deleteOne);

export default router;
