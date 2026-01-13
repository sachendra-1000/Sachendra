import { useEffect, useState } from 'react';

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed w-6 h-6 rounded-full border-2 border-cyan-400 z-50 transition-opacity duration-300 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        className="pointer-events-none fixed w-2 h-2 rounded-full bg-orange-500 z-50 transition-all duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.8 : 0,
        }}
      />
    </>
  );
}
