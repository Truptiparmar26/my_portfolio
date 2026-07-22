import express from 'express';
import { experienceController } from '../controllers/experienceController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(experienceController.getAll)
  .post(protect, admin, experienceController.createOne);

router.route('/:id')
  .get(experienceController.getOne)
  .put(protect, admin, experienceController.updateOne)
  .delete(protect, admin, experienceController.deleteOne);

export default router;
