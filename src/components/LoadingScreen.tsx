import { CircuitBoard } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Props {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: Props) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
      setTimeout(onComplete, 1000);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className="fixed inset-0 bg-[#070B14] flex items-center justify-center z-50 transition-opacity duration-1000"
      style={{ 
        opacity,
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
      }}
    >
      <div className="flex flex-col items-center gap-6">
        <CircuitBoard className="h-12 w-12 text-cyan-400" />
        <span className="text-2xl font-bold text-white">Diviner</span>
      </div>
    </div>
  );
}
