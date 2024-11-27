import { College } from '../types';
import CourseCard from './CourseCard';

interface CourseListProps {
  colleges: College[];
}

export default function CourseList({ colleges }: CourseListProps) {
  const allCourses = colleges.flatMap((college) =>
    college.courses.map((course) => ({
      ...course,
      collegeName: college.name,
    }))
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allCourses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          collegeName={course.collegeName}
        />
      ))}
    </div>
  );
}