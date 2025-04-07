
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'horizontal' | 'cube';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'horizontal', className }) => {
  if (variant === 'cube') {
    return (
      <div className={cn("relative w-10 h-10", className)}>
        <img 
          src="/lovable-uploads/22497c9d-d6fc-43a4-a1ce-ce030f8cc5cf.png" 
          alt="Neura Frame Lab Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative w-20 h-20">
        <img 
          src="/lovable-uploads/22497c9d-d6fc-43a4-a1ce-ce030f8cc5cf.png" 
          alt="Neura Frame Lab Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="ml-4 text-white font-bold">
        <div className="text-4xl tracking-wider">NEURA</div>
        <div className="text-4xl tracking-wider">FRAME</div>
        <div className="text-4xl tracking-wider">LAB</div>
      </div>
    </div>
  );
};

export default Logo;
