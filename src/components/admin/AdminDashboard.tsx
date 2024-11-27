import { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { LayoutDashboard, GraduationCap, BookOpen, Users, Settings, LogOut } from 'lucide-react';
import AdminColleges from './AdminColleges';
import AdminCourses from './AdminCourses';
import AdminStudents from './AdminStudents';
import AdminSettings from './AdminSettings';

export default function AdminDashboard() {
  const [activePage, setActivePage] = useState('colleges');
  const navigate = useNavigate();

  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
    { name: 'Colleges', icon: GraduationCap, href: '/admin/colleges' },
    { name: 'Courses', icon: BookOpen, href: '/admin/courses' },
    { name: 'Students', icon: Users, href: '/admin/students' },
    { name: 'Settings', icon: Settings, href: '/admin/settings' }
  ];

  const handleLogout = () => {
    // Implement logout logic
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <span className="text-xl font-bold text-blue-600">Admin Panel</span>
          </div>
          <nav className="mt-4 px-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 my-1 rounded-lg text-sm font-medium ${
                  activePage === item.name.toLowerCase()
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </a>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 mt-4 w-full rounded-lg text-sm font-medium text-red-600 hover:bg-red-50"
            >
              <LogOut className="w-5 h-5" />
              Sign out
            </button>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            <Routes>
              <Route path="/" element={<AdminDashboardHome />} />
              <Route path="/colleges" element={<AdminColleges />} />
              <Route path="/courses" element={<AdminCourses />} />
              <Route path="/students" element={<AdminStudents />} />
              <Route path="/settings" element={<AdminSettings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminDashboardHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <DashboardCard
        title="Total Colleges"
        value="150"
        icon={GraduationCap}
        color="blue"
      />
      <DashboardCard
        title="Total Courses"
        value="450"
        icon={BookOpen}
        color="green"
      />
      <DashboardCard
        title="Total Students"
        value="2,500"
        icon={Users}
        color="purple"
      />
      <DashboardCard
        title="Active Users"
        value="1,200"
        icon={Users}
        color="yellow"
      />
    </div>
  );
}

function DashboardCard({ title, value, icon: Icon, color }: any) {
  const colors = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    yellow: 'bg-yellow-50 text-yellow-600'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-2">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${colors[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}