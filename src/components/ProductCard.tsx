import React from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { HoverProductGallery } from './HoverProductGallery';
import { AmazonButton } from './AmazonButton';
import { Clock, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const detailUrl = `/products/${product.slug}`;

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-2xl border border-ivory-300 p-4 transition-all duration-300 hover:shadow-xl hover:border-champagne-400">
      {/* Top Media & Details link */}
      <div>
        <Link
          href={detailUrl}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded-xl"
          tabIndex={0}
        >
          <HoverProductGallery
            images={product.images}
            productName={product.name}
            aspectRatio="square"
            priority={priority}
          />
        </Link>

        {/* Content */}
        <div className="mt-4 flex flex-col gap-1.5">
          {/* Category tag & Specs */}
          <div className="flex items-center justify-between text-xs text-ink-muted">
            <span className="font-medium tracking-wider uppercase text-[11px] text-champagne-700">
              {product.categories[0]}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3 text-champagne-600" aria-hidden="true" />
              <span>{product.burnTime}</span>
            </span>
          </div>

          {/* Product Name */}
          <Link
            href={detailUrl}
            className="group-hover:text-burgundy transition-colors focus:outline-none focus-visible:underline"
          >
            <h3 className="font-serif text-lg font-semibold text-ink leading-snug">
              {product.displayName || product.name}
            </h3>
          </Link>

          {/* Confirmed Fragrance Notes */}
          {product.notes ? (
            <div className="text-xs text-ink-muted leading-relaxed line-clamp-2 mt-0.5">
              <span className="font-medium text-ink">Notes:</span> {product.notes.head} ·{' '}
              {product.notes.heart} · {product.notes.base}
            </div>
          ) : (
            <div className="text-xs text-ink-muted italic leading-relaxed line-clamp-2 mt-0.5">
              {product.tagline}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-5 pt-3 border-t border-ivory-200 flex items-center justify-between gap-2">
        <Link
          href={detailUrl}
          className="text-xs font-medium text-burgundy hover:text-burgundy-800 underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-burgundy rounded py-1"
        >
          View Details
        </Link>

        <AmazonButton
          url={product.amazonUrl}
          needsDirectUrl={product.needsDirectUrl}
          size="sm"
          variant="ivory"
        />
      </div>
    </div>
  );
};
