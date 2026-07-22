import express from 'express';
import { serviceController } from '../controllers/serviceController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(serviceController.getAll)
  .post(protect, admin, serviceController.createOne);

router.route('/:id')
  .get(serviceController.getOne)
  .put(protect, admin, serviceController.updateOne)
  .delete(protect, admin, serviceController.deleteOne);

export default router;
