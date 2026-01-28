import { useAuth } from '@/contexts/AuthContext';
import FarmerDashboard from './FarmerDashboard';
import AnalystDashboard from './AnalystDashboard';

export default function Dashboard() {
  const { user } = useAuth();

  // Route to appropriate dashboard based on user role
  if (user?.role === 'analyst' || user?.role === 'admin') {
    return <AnalystDashboard />;
  }

  return <FarmerDashboard />;
}
