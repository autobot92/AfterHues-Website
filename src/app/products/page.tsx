'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CategoryName, Product } from '@/types';
import { categories, getProductsForCategory, getCategoryByName } from '@/data/categories';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { CategoryCard } from '@/components/CategoryCard';
import { CategoryFilters } from '@/components/CategoryFilters';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Sparkles, Layers } from 'lucide-react';

function ProductsCatalog() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get('category');

  const [activeCategory, setActiveCategory] = useState<CategoryName | 'ALL'>('ALL');

  // Synchronize state with URL param on load/change
  useEffect(() => {
    if (categoryParam) {
      const matched = categories.find(
        (c) => c.name.toLowerCase() === categoryParam.toLowerCase()
      );
      if (matched) {
        setActiveCategory(matched.name);
        return;
      }
    }
    setActiveCategory('ALL');
  }, [categoryParam]);

  const handleSelectCategory = (cat: CategoryName | 'ALL') => {
    setActiveCategory(cat);
    if (cat === 'ALL') {
      router.replace('/products', { scroll: false });
    } else {
      router.replace(`/products?category=${encodeURIComponent(cat)}`, { scroll: false });
    }
  };

  // Filtered products list
  const currentProducts: Product[] = useMemo(() => {
    if (activeCategory === 'ALL') {
      return products;
    }
    return getProductsForCategory(activeCategory);
  }, [activeCategory]);

  const activeCategoryInfo =
    activeCategory !== 'ALL' ? getCategoryByName(activeCategory) : null;

  // Other collections for the "Explore More Collections" section
  const otherCategories = useMemo(() => {
    if (activeCategory === 'ALL') {
      return categories.slice(0, 4);
    }
    return categories.filter((c) => c.name !== activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-ivory min-h-screen">
      {/* Header Banner */}
      <div className="bg-burgundy text-ivory py-16 px-4 sm:px-6 lg:px-8 border-b border-champagne-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
            Catalog &amp; Collections
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Our Hand-Poured Candles
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Crafted with 100% soy wax in timeless amber glass jars. Browse by mood, style, or
            scent profile.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs
          items={[
            { label: 'Our Products', href: '/products' },
            ...(activeCategory !== 'ALL' ? [{ label: activeCategory }] : []),
          ]}
        />

        {/* Filter Bar */}
        <div className="mt-6 bg-white rounded-2xl border border-ivory-300 p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-ivory-200">
            <div>
              <h2 className="font-serif text-lg font-bold text-ink">
                {activeCategory === 'ALL' ? 'All Candle Fragrances' : activeCategory}
              </h2>
              <p className="text-xs text-ink-muted mt-0.5">
                {activeCategoryInfo?.description ||
                  `Showing all ${products.length} hand-poured fragrances in our catalog.`}
              </p>
            </div>

            <div className="text-xs font-semibold text-champagne-700 bg-ivory-100 px-3 py-1.5 rounded-full self-start sm:self-auto">
              {currentProducts.length}{' '}
              {currentProducts.length === 1 ? 'Fragrance' : 'Fragrances'} Found
            </div>
          </div>

          <CategoryFilters
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
          />
        </div>

        {/* Filtered Product Grid */}
        <div className="mt-10">
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
                <ProductCard key={`${product.id}-${activeCategory}`} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-ivory-300 p-12 text-center">
              <Sparkles className="w-8 h-8 text-champagne mx-auto mb-3" aria-hidden="true" />
              <h3 className="font-serif text-xl font-bold text-ink">No Candles Found</h3>
              <p className="mt-2 text-xs text-ink-muted">
                No products are currently available in this filter.
              </p>
              <button
                type="button"
                onClick={() => handleSelectCategory('ALL')}
                className="mt-4 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-burgundy text-ivory"
              >
                Reset to All Fragrances
              </button>
            </div>
          )}
        </div>

        {/* Visually Separated "Explore More Collections" section per brief */}
        <div className="mt-20 pt-12 border-t border-champagne-300/60">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-champagne-700 font-semibold">
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Continue Exploring</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-2">
              Explore More Collections
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-ink-muted">
              Discover scents formulated for other spaces, times of day, and sensory rituals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherCategories.slice(0, 4).map((cat) => (
              <CategoryCard key={cat.name} category={cat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ivory flex items-center justify-center p-12">
          <div className="text-xs uppercase tracking-widest text-burgundy font-semibold animate-pulse">
            Loading AfterHues Fragrances...
          </div>
        </div>
      }
    >
      <ProductsCatalog />
    </Suspense>
  );
}
