import express from 'express';
import { profileController } from '../controllers/profileController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(profileController.getAll)
  .post(protect, admin, profileController.createOne);

router.route('/:id')
  .get(profileController.getOne)
  .put(protect, admin, profileController.updateOne)
  .delete(protect, admin, profileController.deleteOne);

export default router;
