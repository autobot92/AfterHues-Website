'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
    touchStartX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className="flex flex-col gap-4">
      {/* Main Large Image Container */}
      <div
        className="relative aspect-square w-full rounded-2xl bg-white border border-ivory-300 overflow-hidden shadow-sm flex items-center justify-center group"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[selectedIndex]}
          alt={`${productName} - View ${selectedIndex + 1} of ${images.length}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-6 transition-all duration-300"
        />

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={prevImage}
            aria-label="Previous product image"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-ink shadow-md hover:scale-105 active:scale-95 transition-all opacity-80 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={nextImage}
            aria-label="Next product image"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-ink shadow-md hover:scale-105 active:scale-95 transition-all opacity-80 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        )}

        {/* Counter indicator */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-ink/70 text-white text-xs tracking-wider">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1" role="tablist" aria-label="Product thumbnails">
          {images.map((imgSrc, index) => {
            const isSelected = index === selectedIndex;
            return (
              <button
                key={imgSrc}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`View image ${index + 1} of ${images.length}`}
                onClick={() => setSelectedIndex(index)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden bg-white border-2 transition-all flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
                  isSelected
                    ? 'border-burgundy ring-2 ring-burgundy/20 shadow-md'
                    : 'border-ivory-300 opacity-70 hover:opacity-100 hover:border-champagne-400'
                }`}
              >
                <Image
                  src={imgSrc}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  sizes="80px"
                  className="object-contain p-1.5"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
