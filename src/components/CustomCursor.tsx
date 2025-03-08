import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      
      cursorRef.current.style.setProperty('--x', `${e.clientX}px`);
      cursorRef.current.style.setProperty('--y', `${e.clientY}px`);

      trailsRef.current.forEach((trail, i) => {
        if (!trail) return;
        const delay = 0.05 * i;
        trail.style.transitionDelay = `${delay}s`;
        trail.style.setProperty('--x', `${e.clientX}px`);
        trail.style.setProperty('--y', `${e.clientY}px`);
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div ref={cursorRef} className="cursor">
      <div className="cursor-core" />
      <div className="cursor-ring" />
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={el => trailsRef.current[i] = el}
          className="cursor-trail"
          style={{
            '--index': i,
            opacity: 1 - (i * 0.2)
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
