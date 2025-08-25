import { useEffect, useState } from 'react';

interface LoadingCurtainProps {
  onAnimationComplete: () => void;
}

export const LoadingCurtain = ({ onAnimationComplete }: LoadingCurtainProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onAnimationComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Left Curtain */}
      <div className="w-1/2 h-full bg-gradient-to-r from-primary to-secondary curtain-left">
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl font-playfair font-bold mb-4">Portfolio</h1>
            <div className="w-16 h-1 bg-primary-foreground mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Right Curtain */}
      <div className="w-1/2 h-full bg-gradient-to-l from-primary to-secondary curtain-right">
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl font-playfair font-bold mb-4">Journey</h1>
            <div className="w-16 h-1 bg-primary-foreground mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Central Loading Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white z-10">
          <div className="animate-pulse text-2xl font-playfair">Opening Portfolio...</div>
        </div>
      </div>
    </div>
  );
};