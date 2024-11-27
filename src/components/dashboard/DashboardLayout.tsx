import { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  GraduationCap,
  LayoutDashboard,
  Target,
  CheckSquare,
  LogOut,
  Menu,
  X,
  User,
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Goals', href: '/dashboard/goals', icon: Target },
    { name: 'To-Do List', href: '/dashboard/todos', icon: CheckSquare },
    { name: 'Profile', href: '/dashboard/profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-75 z-40 transition-opacity lg:hidden ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-50 transition-transform transform lg:translate-x-0 lg:static lg:h-screen ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <Link to="/dashboard" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Future Skills</span>
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-4 px-2 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${
                  pathname === item.href
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 w-full rounded-lg text-sm font-medium text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-5 w-5" />
            Sign out
          </button>
        </div>
      </div>

      <div className="lg:pl-64 flex flex-col min-h-screen">
        <header className="bg-white shadow-sm lg:hidden">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-600 hover:text-gray-900"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/dashboard" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">Future Skills</span>
            </Link>
            <div className="w-6" /> {/* Spacer for centering */}
          </div>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}