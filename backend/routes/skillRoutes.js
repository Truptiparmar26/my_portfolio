import express from 'express';
import { skillController } from '../controllers/skillController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(skillController.getAll)
  .post(protect, admin, skillController.createOne);

router.route('/:id')
  .get(skillController.getOne)
  .put(protect, admin, skillController.updateOne)
  .delete(protect, admin, skillController.deleteOne);

export default router;
