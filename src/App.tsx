import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Status from './pages/Status';
import Firmware from './pages/Firmware';
import FAQ from './pages/FAQ';
import Admin from './pages/Admin';
import AdminDashboard from './pages/AdminDashboard';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setTypedText(prev => {
        const newText = prev + e.key;
        if (newText.includes('AdminRobin')) {
          window.location.href = '/admin';
          return '';
        }
        return newText.slice(-10);
      });
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  return (
    <Router>
      <CustomCursor />
      <div className="min-h-screen bg-[#070B14] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/status" element={<Status />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/firmware" element={<Firmware />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
    </Router>
  );
}
