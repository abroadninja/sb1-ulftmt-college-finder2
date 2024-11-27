import { College } from '../types';

export interface SavedCollege {
  id: string;
  dateAdded: Date;
  notes?: string;
}

export interface College {
  id: string;
  name: string;
  location: string;
  type: 'Public' | 'Private';
  rating: number;
  tuitionPerYear: number;
  image: string;
  acceptanceRate: number;
  studentCount: number;
  ranking: number;
  foundedYear: number;
  campusSize: number;
  hasHousing: boolean;
  internationalStudents: number;
  researchFunding: number;
  sportsFacilities: string[];
  courses: Course[];
}

export interface Course {
  id: string;
  name: string;
  duration: string;
  degree: 'Bachelor' | 'Master' | 'PhD';
  department: string;
  description: string;
  careers: string[];
  annualFee: number;
  requirements: string[];
  scholarshipsAvailable: boolean;
  internshipPartners: string[];
}

export interface FilterState {
  search: string;
  type: string[];
  minTuition: number;
  maxTuition: number;
  degrees: string[];
  departments: string[];
  minRating: number;
  maxAcceptanceRate: number;
  hasHousing: boolean | null;
  minFoundedYear: number;
  scholarshipsOnly: boolean;
  sortBy: 'ranking' | 'tuition' | 'rating' | 'acceptanceRate';
  sortOrder: 'asc' | 'desc';
  city?: string;
  state?: string;
  entranceExam?: string[];
}