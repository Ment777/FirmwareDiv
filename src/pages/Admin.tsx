import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

export default function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === 'AdminRobin' && password === 'Robin') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#0A1018] p-8 rounded-lg border border-cyan-900/30">
        <div className="flex flex-col items-center mb-8">
          <Lock className="h-12 w-12 text-cyan-400 mb-4" />
          <h2 className="text-2xl font-bold text-white">Admin Access</h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="bg-red-900/50 text-red-400 p-3 rounded text-sm">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[#111827] border border-cyan-900/30 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#111827] border border-cyan-900/30 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
