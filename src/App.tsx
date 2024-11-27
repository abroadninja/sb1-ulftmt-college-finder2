import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import ForgotPasswordForm from './components/auth/ForgotPasswordForm';
import DashboardLayout from './components/dashboard/DashboardLayout';
import GoalCalendar from './components/GoalCalendar/GoalCalendar';
import TodoList from './components/dashboard/TodoList';
import ProfileSettings from './components/dashboard/ProfileSettings';
import CollegeFinder from './components/CollegeFinder';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  // Implement admin authentication check
  const isAdmin = true; // Replace with actual admin auth check
  return isAdmin ? <>{children}</> : <Navigate to="/admin/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<CollegeFinder />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<div>Welcome to your dashboard!</div>} />
          <Route path="goals" element={<GoalCalendar />} />
          <Route path="todos" element={<TodoList />} />
          <Route path="profile" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}