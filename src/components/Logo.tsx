
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
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L0 10V30L20 40L40 30V10L20 0Z" fill="none" stroke="white" strokeWidth="2"/>
          <path d="M20 13.3333L6.66667 20L20 26.6667L33.3333 20L20 13.3333Z" fill="none" stroke="white" strokeWidth="2"/>
          <path d="M20 0V13.3333M20 26.6667V40M6.66667 20V35M33.3333 20V35" stroke="white" strokeWidth="2"/>
        </svg>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative w-20 h-20">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 0L0 20V60L40 80L80 60V20L40 0Z" fill="none" stroke="white" strokeWidth="3"/>
          <path d="M40 26.6667L13.3333 40L40 53.3333L66.6667 40L40 26.6667Z" fill="none" stroke="white" strokeWidth="3"/>
          <path d="M40 0V26.6667M40 53.3333V80M13.3333 40V70M66.6667 40V70" stroke="white" strokeWidth="3"/>
        </svg>
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
