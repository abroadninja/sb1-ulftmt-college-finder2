import { z } from 'zod';

export const CollegeCreateSchema = z.object({
  name: z.string().min(2),
  location: z.string(),
  type: z.string(),
  rating: z.number().min(0).max(5),
  tuitionPerYear: z.number().positive(),
  image: z.string().url(),
  acceptanceRate: z.number().min(0).max(100),
  studentCount: z.number().positive(),
  ranking: z.number().positive(),
  foundedYear: z.number(),
  campusSize: z.number().positive(),
  hasHousing: z.boolean(),
  internationalStudents: z.number().nonnegative(),
  researchFunding: z.number().nonnegative(),
  sportsFacilities: z.array(z.string())
});

export const CollegeUpdateSchema = CollegeCreateSchema.partial();