import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('adminAuth') === 'true';
    if (!isAdmin) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#070B14] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
        {/* Add your admin dashboard content here */}
      </div>
    </div>
  );
}
