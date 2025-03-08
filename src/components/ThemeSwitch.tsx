import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ThemeSwitchProps {
  className?: string;
}

export default function ThemeSwitch({ className = '' }: ThemeSwitchProps) {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
        isDark ? 'bg-[#0A1018] border-cyan-900/30' : 'bg-yellow-100 border-yellow-400/30'
      } border ${className}`}
    >
      <div
        className={`absolute top-1 w-6 h-6 rounded-full transform transition-transform duration-300 ${
          isDark ? 'translate-x-9 bg-cyan-400' : 'translate-x-1 bg-yellow-400'
        } flex items-center justify-center`}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-[#0A1018]" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-100" />
        )}
      </div>
    </button>
  );
}
