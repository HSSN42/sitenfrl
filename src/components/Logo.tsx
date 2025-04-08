import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'horizontal' | 'cube';
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ variant = 'horizontal', className, size = 1 }) => {
  if (variant === 'cube') {
    return (
      <div className={cn("relative w-10 h-10", className)}>
        <img 
          src="/img/icon.png" 
          alt="Neura Frame Lab Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className={cn("flex", className)}>
      <div className="relative w-32 h-32">
        <img 
          src="/img/nrfl.png" 
          alt="Neura Frame Lab Logo" 
          className={cn("w-full h-full object-contain", {
            'scale-[2.8]': size === 2.8
          })}
        />
      </div>
    </div>
  );
};

export default Logo;
