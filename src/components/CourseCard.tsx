import { Clock, BookOpen, Briefcase, Award } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  collegeName: string;
}

export default function CourseCard({ course, collegeName }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{course.name}</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {course.degree}
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-4">{collegeName}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-sm">{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-green-600" />
            <span className="text-sm">{course.department}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-purple-600" />
            <span className="text-sm">{course.careers[0]}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-yellow-600" />
            <span className="text-sm">
              {course.scholarshipsAvailable ? 'Scholarship Available' : 'No Scholarship'}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4">{course.description}</p>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Career Opportunities</h4>
            <div className="flex flex-wrap gap-2">
              {course.careers.map((career) => (
                <span
                  key={career}
                  className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs"
                >
                  {career}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Internship Partners</h4>
            <div className="flex flex-wrap gap-2">
              {course.internshipPartners.map((partner) => (
                <span
                  key={partner}
                  className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-blue-600">
                ${course.annualFee.toLocaleString()}/year
              </span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}