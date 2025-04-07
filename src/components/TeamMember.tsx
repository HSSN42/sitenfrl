
import React from 'react';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  className?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  imageSrc,
  className 
}) => {
  return (
    <div className={cn("group", className)}>
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-white/70">{role}</p>
    </div>
  );
};

export default TeamMember;
