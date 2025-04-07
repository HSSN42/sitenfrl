
import React from 'react';
import { cn } from '@/lib/utils';

interface GradientImageProps {
  className?: string;
}

const GradientImage: React.FC<GradientImageProps> = ({ className }) => {
  return (
    <div className={cn("relative w-full h-full flex items-center justify-center", className)}>
      <img 
        src="/lovable-uploads/9750232b-1b49-434e-9461-19e6e59a45c3.png" 
        alt="Gradiente Neura Frame Lab" 
        className="w-full max-w-xl h-auto"
      />
    </div>
  );
};

export default GradientImage;
