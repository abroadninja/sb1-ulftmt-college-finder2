import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { hashPassword, comparePasswords } from '../utils/auth';
import { generateToken } from '../utils/jwt';
import { AdminLoginSchema, AdminCreateSchema } from '../schemas/admin.schema';

export const adminController = {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = AdminLoginSchema.parse(req.body);
      
      const admin = await prisma.admin.findUnique({ where: { email } });
      if (!admin) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const isValid = await comparePasswords(password, admin.password);
      if (!isValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = generateToken({ id: admin.id, role: admin.role });
      res.json({ token });
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  },

  async createAdmin(req: Request, res: Response) {
    try {
      const data = AdminCreateSchema.parse(req.body);
      const hashedPassword = await hashPassword(data.password);
      
      const admin = await prisma.admin.create({
        data: {
          ...data,
          password: hashedPassword
        }
      });

      res.status(201).json({ id: admin.id, email: admin.email, name: admin.name });
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }
};