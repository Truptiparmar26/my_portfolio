import express from 'express';
import { messageController } from '../controllers/messageController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(messageController.getAll)
  .post(messageController.createOne);

router.route('/:id')
  .get(messageController.getOne)
  .put(protect, admin, messageController.updateOne)
  .delete(protect, admin, messageController.deleteOne);

export default router;
