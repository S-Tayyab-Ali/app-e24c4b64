"use client";

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  hoverEffect?: boolean;
  glass?: boolean;
}

const Card = ({ 
  children, 
  className = '', 
  noPadding = false,
  hoverEffect = false,
  glass = true
}: CardProps) => {
  const baseClasses = "rounded-2xl overflow-hidden border border-white/20 shadow-xl";
  
  const glassClasses = glass 
    ? "bg-white/80 backdrop-blur-xl" 
    : "bg-white";
    
  const hoverClasses = hoverEffect 
    ? "transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/90" 
    : "";
    
  const paddingClasses = noPadding ? "" : "p-6 md:p-8";
  
  return (
    <div className={`${baseClasses} ${glassClasses} ${hoverClasses} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;

