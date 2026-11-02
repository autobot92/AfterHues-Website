'use client';

import React from 'react';
import { CategoryName } from '@/types';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

interface CategoryFiltersProps {
  activeCategory: CategoryName | 'ALL';
  onSelectCategory: (category: CategoryName | 'ALL') => void;
}

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full">
      <div
        className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none"
        role="tablist"
        aria-label="Filter candles by category"
      >
        {/* All Products Option */}
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === 'ALL'}
          onClick={() => onSelectCategory('ALL')}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
            activeCategory === 'ALL'
              ? 'bg-burgundy text-ivory shadow-md ring-2 ring-burgundy/30'
              : 'bg-white text-ink-muted hover:text-burgundy hover:bg-ivory-100 border border-ivory-300'
          }`}
        >
          All Fragrances ({products.length})
        </button>

        {/* 7 Exact Categories */}
        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(cat.name)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
                isActive
                  ? 'bg-burgundy text-ivory shadow-md ring-2 ring-burgundy/30'
                  : 'bg-white text-ink-muted hover:text-burgundy hover:bg-ivory-100 border border-ivory-300'
              }`}
            >
              {cat.name} ({cat.productSlugs.length})
            </button>
          );
        })}
      </div>
    </div>
  );
};
