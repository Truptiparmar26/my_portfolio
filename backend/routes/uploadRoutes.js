import express from 'express';
import upload from '../middleware/upload.js';
import cloudinary from '../config/cloudinary.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, admin, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Convert buffer to base64
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    let dataURI = 'data:' + req.file.mimetype + ';base64,' + b64;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'portfolio',
      resource_type: 'auto',
    });

    res.status(200).json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error uploading image to Cloudinary' });
  }
});

router.delete('/:public_id', protect, admin, async (req, res) => {
  try {
    const { public_id } = req.params;
    
    await cloudinary.uploader.destroy(`portfolio/${public_id}`);
    
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting image from Cloudinary' });
  }
});

export default router;
