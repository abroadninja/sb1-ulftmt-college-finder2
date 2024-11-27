import { Router } from 'express';
import { adminController } from '../controllers/admin.controller';
import { authenticate, authorizeAdmin } from '../middleware/auth.middleware';

const router = Router();

router.post('/login', adminController.login);
router.post('/create', authenticate, authorizeAdmin, adminController.createAdmin);

export const adminRoutes = router;