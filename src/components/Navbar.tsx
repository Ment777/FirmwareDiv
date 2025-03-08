import { CircuitBoard, Menu, X, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { memo, useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClasses = (path: string) => {
    const active = isActive(path);
    return `relative transition-colors duration-300 ${active ? 'text-cyan-400 after:scale-x-100' : 'text-white/90 hover:text-cyan-400 after:scale-x-0 hover:after:scale-x-100'} after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-cyan-400 after:transform after:origin-left after:transition-transform after:duration-300`;
  };

  return (
    <nav className="bg-[#070B14]/95 text-white fixed w-full z-40 backdrop-blur-sm border-b border-cyan-950/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <CircuitBoard className="h-7 w-7 text-cyan-400 transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="ml-2 text-lg font-bold group-hover:text-cyan-400 transition-colors duration-300">Diviner</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`flex items-center gap-2 ${getLinkClasses('/')}`}>
              <Home className={`w-4 h-4 ${isActive('/') ? 'text-cyan-400' : 'text-white/90'}`} />
              Home
            </Link>
            <Link to="/status" className={getLinkClasses('/status')}>Status</Link>
            <Link to="/faq" className={getLinkClasses('/faq')}>FAQ</Link>
            <Link to="/firmware" className={getLinkClasses('/firmware')}>Firmware</Link>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://discord.gg/your-invite-link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#5865F2]/20 hover:bg-[#5865F2]/30 px-3 py-1.5 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(88,101,242,0.3)] flex items-center gap-2 border border-[#5865F2]/50"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span className="text-sm">Discord</span>
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 hover:bg-white/10 rounded transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-cyan-400" />
              ) : (
                <Menu className="h-6 w-6 hover:text-cyan-400 transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 z-50 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}
      >
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
          onClick={() => setIsMenuOpen(false)}
        />
        <div className={`absolute inset-y-0 left-0 w-full max-w-sm bg-[#070B14] transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-out`}>
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-cyan-950/50">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                  <CircuitBoard className="h-7 w-7 text-cyan-400" />
                  <span className="ml-2 text-lg font-bold">Diviner</span>
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded transition-colors duration-300"
                >
                  <X className="h-6 w-6 text-cyan-400" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-1 px-3">
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg ${isActive('/') ? 'text-cyan-400 bg-white/5' : 'text-white/90'} hover:bg-white/5 transition-colors duration-300`}
                >
                  <Home className={`w-4 h-4 ${isActive('/') ? 'text-cyan-400' : 'text-white/90'}`} />
                  Home
                </Link>
                <Link 
                  to="/status" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg ${isActive('/status') ? 'text-cyan-400 bg-white/5' : 'text-white/90'} hover:bg-white/5 transition-colors duration-300`}
                >
                  Status
                </Link>
                <Link 
                  to="/faq" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg ${isActive('/faq') ? 'text-cyan-400 bg-white/5' : 'text-white/90'} hover:bg-white/5 transition-colors duration-300`}
                >
                  FAQ
                </Link>
                <Link 
                  to="/firmware" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg ${isActive('/firmware') ? 'text-cyan-400 bg-white/5' : 'text-white/90'} hover:bg-white/5 transition-colors duration-300`}
                >
                  Firmware
                </Link>
              </div>
            </div>
            <div className="p-4 border-t border-cyan-950/50">
              <a
                href="https://discord.gg/your-invite-link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#5865F2]/20 hover:bg-[#5865F2]/30 px-4 py-3 rounded-lg transition-all duration-300 border border-[#5865F2]/50"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);
