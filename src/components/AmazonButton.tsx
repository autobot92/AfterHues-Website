import React from 'react';
import { ExternalLink } from 'lucide-react';

interface AmazonButtonProps {
  url: string;
  needsDirectUrl?: boolean;
  label?: string;
  variant?: 'ivory' | 'burgundy' | 'outline' | 'champagne';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AmazonButton: React.FC<AmazonButtonProps> = ({
  url,
  needsDirectUrl = false,
  label,
  variant = 'ivory',
  size = 'md',
  className = '',
}) => {
  const defaultLabel = needsDirectUrl ? 'Explore on Amazon' : 'Buy on Amazon';
  const displayLabel = label || defaultLabel;

  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none group whitespace-nowrap shrink-0';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 min-h-[36px]',
    md: 'text-sm px-6 py-3 gap-2 min-h-[44px]',
    lg: 'text-base px-8 py-4 gap-2.5 font-semibold min-h-[52px]',
  };

  const variantStyles = {
    ivory:
      'bg-ivory text-burgundy hover:bg-white active:bg-ivory-200 shadow-sm border border-champagne-300 focus-visible:ring-burgundy',
    burgundy:
      'bg-burgundy text-ivory hover:bg-burgundy-600 active:bg-burgundy-800 shadow-md border border-burgundy-800 focus-visible:ring-burgundy',
    outline:
      'bg-transparent text-burgundy border border-champagne hover:border-burgundy hover:bg-burgundy-50 active:bg-burgundy-100 focus-visible:ring-burgundy',
    champagne:
      'bg-champagne text-ink hover:bg-champagne-400 active:bg-champagne-600 shadow-sm border border-champagne-600 focus-visible:ring-champagne-700',
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${displayLabel} (opens Amazon store in a new window)`}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      <span className="whitespace-nowrap">{displayLabel}</span>
      <ExternalLink
        className="w-4 h-4 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
        aria-hidden="true"
      />
    </a>
  );
};
