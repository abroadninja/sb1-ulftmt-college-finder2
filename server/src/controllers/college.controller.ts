import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { CollegeCreateSchema, CollegeUpdateSchema } from '../schemas/college.schema';

export const collegeController = {
  async getAll(req: Request, res: Response) {
    try {
      const colleges = await prisma.college.findMany({
        include: { courses: true }
      });
      res.json(colleges);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const college = await prisma.college.findUnique({
        where: { id },
        include: { courses: true }
      });
      
      if (!college) {
        return res.status(404).json({ message: 'College not found' });
      }
      
      res.json(college);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const data = CollegeCreateSchema.parse(req.body);
      const college = await prisma.college.create({
        data,
        include: { courses: true }
      });
      res.status(201).json(college);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = CollegeUpdateSchema.parse(req.body);
      
      const college = await prisma.college.update({
        where: { id },
        data,
        include: { courses: true }
      });
      
      res.json(college);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.college.delete({ where: { id } });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
};