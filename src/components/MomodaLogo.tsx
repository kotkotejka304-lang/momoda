import React from 'react';

interface MomodaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'responsive';
  showSubtitle?: boolean;
}

export const MomodaLogo: React.FC<MomodaLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  // Height and dimensions according to requested size
  const sizeClasses = {
    sm: 'h-9 w-9 sm:h-10 sm:w-10',
    md: 'h-12 w-12 sm:h-13 sm:w-13',
    lg: 'h-16 w-16 sm:h-20 sm:w-20',
    hero: 'h-24 w-24 sm:h-28 sm:w-28',
    responsive: 'w-full max-w-36 h-auto aspect-square',
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/momoda-logo.png"
        alt="Momoda Asian Street Food"
        className={`${sizeClasses} object-contain rounded-xl shadow-xs border border-stone-200/60 bg-white`}
        loading="eager"
      />
    </div>
  );
};
