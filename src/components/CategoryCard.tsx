import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CategoryInfo } from '@/types';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: CategoryInfo;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const targetUrl = `/products?category=${encodeURIComponent(category.name)}`;

  return (
    <Link
      href={targetUrl}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-ivory-300 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-champagne-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
    >
      {/* Cover Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ivory-100">
        <Image
          src={category.coverImage}
          alt={`Candle from the ${category.name} collection`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Subtle gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-medium text-burgundy shadow-sm">
          {category.productSlugs.length} Scents
        </span>
      </div>

      {/* Card Info */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-serif text-lg font-bold text-ink group-hover:text-burgundy transition-colors tracking-wide">
            {category.name}
          </h3>
          <p className="mt-1.5 text-xs text-ink-muted leading-relaxed line-clamp-2">
            {category.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-ivory-200 flex items-center justify-between text-xs font-semibold text-burgundy group-hover:text-burgundy-800">
          <span>Explore Collection</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
};
