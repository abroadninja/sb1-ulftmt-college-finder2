import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { rateLimit } from 'express-rate-limit';
import { adminRoutes } from './routes/admin.routes';
import { collegeRoutes } from './routes/college.routes';
import { courseRoutes } from './routes/course.routes';
import { studentRoutes } from './routes/student.routes';
import { errorHandler } from './middleware/error.middleware';
import { authenticate } from './middleware/auth.middleware';

dotenv.config();

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/colleges', collegeRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/students', studentRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});