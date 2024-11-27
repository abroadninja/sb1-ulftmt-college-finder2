import { College } from '../types';

export const colleges: College[] = [
  {
    id: '1',
    name: 'Indian Institute of Technology Delhi',
    location: 'New Delhi, Delhi',
    type: 'Public',
    rating: 4.8,
    tuitionPerYear: 200000,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
    acceptanceRate: 2,
    studentCount: 10000,
    ranking: 1,
    foundedYear: 1961,
    campusSize: 325,
    hasHousing: true,
    internationalStudents: 500,
    researchFunding: 500000000,
    sportsFacilities: ['Cricket Ground', 'Swimming Pool', 'Sports Complex', 'Tennis Courts'],
    courses: [
      {
        id: '1',
        name: 'Computer Science and Engineering',
        duration: '4 years',
        degree: 'Bachelor',
        department: 'Engineering',
        description: 'Premier B.Tech program with focus on AI, ML, and modern software development',
        careers: ['Software Engineer', 'Data Scientist', 'Research Scientist'],
        annualFee: 200000,
        requirements: ['JEE Advanced Rank < 1000', 'Class 12: 75%'],
        scholarshipsAvailable: true,
        internshipPartners: ['Google', 'Microsoft', 'Amazon']
      },
      {
        id: '2',
        name: 'Artificial Intelligence',
        duration: '2 years',
        degree: 'Master',
        department: 'Engineering',
        description: 'Advanced program in AI, Deep Learning, and Robotics',
        careers: ['AI Engineer', 'ML Researcher', 'Data Scientist'],
        annualFee: 250000,
        requirements: ['GATE Score > 90', 'B.Tech in relevant field'],
        scholarshipsAvailable: true,
        internshipPartners: ['IBM', 'Intel', 'NVIDIA']
      }
    ]
  },
  {
    id: '2',
    name: 'Indian Institute of Management Ahmedabad',
    location: 'Ahmedabad, Gujarat',
    type: 'Public',
    rating: 4.9,
    tuitionPerYear: 2300000,
    image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80',
    acceptanceRate: 1,
    studentCount: 1200,
    ranking: 1,
    foundedYear: 1961,
    campusSize: 106,
    hasHousing: true,
    internationalStudents: 200,
    researchFunding: 300000000,
    sportsFacilities: ['Fitness Center', 'Cricket Ground', 'Basketball Court'],
    courses: [
      {
        id: '3',
        name: 'Post Graduate Programme in Management',
        duration: '2 years',
        degree: 'Master',
        department: 'Business',
        description: 'Flagship MBA program focusing on leadership and management',
        careers: ['Management Consultant', 'Investment Banker', 'Business Leader'],
        annualFee: 2300000,
        requirements: ['CAT Score > 99 percentile', 'Work experience preferred'],
        scholarshipsAvailable: true,
        internshipPartners: ['McKinsey', 'BCG', 'Bain']
      }
    ]
  },
  {
    id: '3',
    name: 'All India Institute of Medical Sciences',
    location: 'New Delhi, Delhi',
    type: 'Public',
    rating: 4.9,
    tuitionPerYear: 150000,
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80',
    acceptanceRate: 0.1,
    studentCount: 2500,
    ranking: 1,
    foundedYear: 1956,
    campusSize: 164,
    hasHousing: true,
    internationalStudents: 100,
    researchFunding: 800000000,
    sportsFacilities: ['Sports Complex', 'Gymnasium'],
    courses: [
      {
        id: '4',
        name: 'MBBS',
        duration: '5.5 years',
        degree: 'Bachelor',
        department: 'Medicine',
        description: 'Premier medical program including 1-year internship',
        careers: ['Doctor', 'Surgeon', 'Medical Researcher'],
        annualFee: 150000,
        requirements: ['NEET Rank < 100', 'Class 12: 90% in PCB'],
        scholarshipsAvailable: true,
        internshipPartners: ['AIIMS Hospitals', 'Safdarjung Hospital']
      }
    ]
  },
  {
    id: '4',
    name: 'National Institute of Design',
    location: 'Ahmedabad, Gujarat',
    type: 'Public',
    rating: 4.7,
    tuitionPerYear: 400000,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
    acceptanceRate: 3,
    studentCount: 1500,
    ranking: 1,
    foundedYear: 1961,
    campusSize: 60,
    hasHousing: true,
    internationalStudents: 150,
    researchFunding: 100000000,
    sportsFacilities: ['Sports Room', 'Fitness Center'],
    courses: [
      {
        id: '5',
        name: 'Product Design',
        duration: '4 years',
        degree: 'Bachelor',
        department: 'Design',
        description: 'Comprehensive program in industrial and product design',
        careers: ['Product Designer', 'UX Designer', 'Design Consultant'],
        annualFee: 400000,
        requirements: ['NID DAT Score', 'Portfolio Review'],
        scholarshipsAvailable: true,
        internshipPartners: ['Apple', 'Samsung', 'Titan']
      }
    ]
  },
  {
    id: '5',
    name: 'National Law School of India University',
    location: 'Bangalore, Karnataka',
    type: 'Public',
    rating: 4.8,
    tuitionPerYear: 250000,
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80',
    acceptanceRate: 2,
    studentCount: 600,
    ranking: 1,
    foundedYear: 1987,
    campusSize: 23,
    hasHousing: true,
    internationalStudents: 50,
    researchFunding: 100000000,
    sportsFacilities: ['Basketball Court', 'Gymnasium'],
    courses: [
      {
        id: '6',
        name: 'B.A. LL.B. (Hons.)',
        duration: '5 years',
        degree: 'Bachelor',
        department: 'Law',
        description: 'Integrated law program with specializations',
        careers: ['Corporate Lawyer', 'Legal Consultant', 'Judge'],
        annualFee: 250000,
        requirements: ['CLAT Rank < 100', 'Class 12: 70%'],
        scholarshipsAvailable: true,
        internshipPartners: ['Supreme Court', 'High Courts', 'Law Firms']
      }
    ]
  }
];