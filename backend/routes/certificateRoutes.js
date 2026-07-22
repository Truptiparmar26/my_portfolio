import express from 'express';
import { certificateController } from '../controllers/certificateController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(certificateController.getAll)
  .post(protect, admin, certificateController.createOne);

router.route('/:id')
  .get(certificateController.getOne)
  .put(protect, admin, certificateController.updateOne)
  .delete(protect, admin, certificateController.deleteOne);

export default router;
