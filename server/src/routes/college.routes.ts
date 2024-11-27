import { Router } from 'express';
import { collegeController } from '../controllers/college.controller';
import { authenticate, authorizeAdmin } from '../middleware/auth.middleware';

const router = Router();

// Public routes
router.get('/', collegeController.getAll);
router.get('/:id', collegeController.getOne);

// Protected routes
router.post('/', authenticate, authorizeAdmin, collegeController.create);
router.put('/:id', authenticate, authorizeAdmin, collegeController.update);
router.delete('/:id', authenticate, authorizeAdmin, collegeController.delete);

export const collegeRoutes = router;