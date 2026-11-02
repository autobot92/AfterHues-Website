'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface HoverProductGalleryProps {
  images: string[];
  productName: string;
  aspectRatio?: 'square' | 'portrait';
  priority?: boolean;
}

export const HoverProductGallery: React.FC<HoverProductGalleryProps> = ({
  images,
  productName,
  aspectRatio = 'square',
  priority = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isHovered && images.length > 1 && !prefersReducedMotion) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 1400);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      // Return to first image on exit
      setCurrentIndex(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, images.length]);

  const aspectClass = aspectRatio === 'square' ? 'aspect-square' : 'aspect-[4/5]';

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-ivory-100 ${aspectClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {images.map((imgSrc, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={imgSrc}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={imgSrc}
              alt={`${productName} - View ${index + 1} of ${images.length}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={priority && index === 0}
              className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        );
      })}

      {/* Subtle indicator dots on hover */}
      {images.length > 1 && isHovered && (
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2 py-1 rounded-full bg-ink/30 backdrop-blur-sm transition-opacity duration-300"
          aria-hidden="true"
        >
          {images.map((_, i) => (
            <span
              key={i}
              className={`block rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-4 h-1.5 bg-ivory'
                  : 'w-1.5 h-1.5 bg-ivory/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
