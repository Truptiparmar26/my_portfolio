import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import certificateRoutes from './routes/certificateRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import socialLinkRoutes from './routes/sociallinkRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import aiProjectRoutes from './routes/aiprojectRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL || ['http://localhost:5173', 'https://trupti-protfolio.vercel.app', 'https://trupti-protfolio.vercel.app/'],
  credentials: true
}));
app.use(helmet());
app.use(compression());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/social-links', socialLinkRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/aiprojects', aiProjectRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
