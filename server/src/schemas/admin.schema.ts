import { z } from 'zod';

export const AdminLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export const AdminCreateSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),
  role: z.enum(['ADMIN', 'SUPER_ADMIN']).default('ADMIN')
});