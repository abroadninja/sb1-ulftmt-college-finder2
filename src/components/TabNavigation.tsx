import { GraduationCap, BookOpen, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TabNavigationProps {
  activeTab: 'colleges' | 'courses';
  onTabChange: (tab: 'colleges' | 'courses') => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-4">
        <button
          onClick={() => onTabChange('colleges')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'colleges'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <GraduationCap className="w-5 h-5" />
          Colleges
        </button>
        <button
          onClick={() => onTabChange('courses')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'courses'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          Courses
        </button>
      </div>
      <Link
        to="/login"
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <LogIn className="w-5 h-5" />
        Student Login
      </Link>
    </div>
  );
}