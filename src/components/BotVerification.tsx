import { Lock } from 'lucide-react';
import { useState, useRef } from 'react';

interface Props {
  onVerified: () => void;
}

export default function BotVerification({ onVerified }: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (completed) return;
    setIsDragging(true);
    startXRef.current = e.clientX - position;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const newPosition = Math.max(0, Math.min(e.clientX - startXRef.current, 272));
    setPosition(newPosition);

    if (newPosition >= 272) {
      setCompleted(true);
      setIsDragging(false);
      setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          onVerified();
        }, 1000);
      }, 500);
    }
  };

  const handleMouseUp = () => {
    if (!completed) {
      setPosition(0);
    }
    setIsDragging(false);
  };

  return (
    <div className={`fixed inset-0 bg-[#070B14] flex items-center justify-center z-50 transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center gap-6">
        <Lock className="h-16 w-16 text-cyan-400" />
        <h2 className="text-2xl font-bold text-white mb-2">Verify Access</h2>
        
        {/* Slider Container */}
        <div 
          className="w-[320px] h-[48px] bg-[#0A1018] rounded-md p-2 relative overflow-hidden border border-cyan-900/30"
          ref={sliderRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Track */}
          <div className="absolute inset-0 flex items-center justify-end pr-4 text-gray-500 text-sm">
            Swipe to Verify
          </div>
          
          {/* Slider Handle */}
          <div
            className={`w-12 h-8 bg-cyan-400 rounded cursor-pointer relative transition-colors ${completed ? 'bg-green-400' : ''}`}
            style={{
              transform: `translateX(${position}px)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out'
            }}
            onMouseDown={handleMouseDown}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-4 bg-white/30 rounded-full mx-[2px]" />
              <div className="w-1 h-4 bg-white/30 rounded-full mx-[2px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
