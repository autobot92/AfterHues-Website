import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, getProductBySlug } from '@/data/products';
import { ProductGallery } from '@/components/ProductGallery';
import { AmazonButton } from '@/components/AmazonButton';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/components/ProductCard';
import { ProductJsonLd } from '@/components/JsonLd';
import {
  Flame,
  Clock,
  Sparkles,
  ShieldCheck,
  Check,
  Package,
  Layers,
  ArrowLeft,
} from 'lucide-react';

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const titleName = product.displayName || product.name;
  return {
    title: `${titleName} — Hand-Poured Soy Wax Candle`,
    description: product.description,
    openGraph: {
      title: `${titleName} — AfterHues Studio`,
      description: product.description,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 800,
          alt: `${titleName} Hand-Poured Candle`,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const displayName = product.displayName || product.name;

  // Find related products sharing categories
  const relatedProducts = products
    .filter(
      (p) =>
        p.id !== product.id &&
        p.categories.some((cat) => product.categories.includes(cat))
    )
    .slice(0, 3);

  return (
    <div className="bg-ivory min-h-screen">
      <ProductJsonLd product={product} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Our Products', href: '/products' },
            { label: displayName },
          ]}
        />

        {/* Back link */}
        <div className="mt-2 mb-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-muted hover:text-burgundy transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to All Fragrances</span>
          </Link>
        </div>

        {/* Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <ProductGallery images={product.images} productName={displayName} />
          </div>

          {/* Right Column: Info & Action */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Category Badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              {product.categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/products?category=${encodeURIComponent(cat)}`}
                  className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-champagne-100/70 hover:bg-champagne-200 text-burgundy transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
              {displayName}
            </h1>

            {/* Tagline */}
            {product.tagline && (
              <p className="mt-2 text-sm text-champagne-700 font-medium italic">
                {product.tagline}
              </p>
            )}

            {/* Specs Summary Bar */}
            <div className="mt-6 py-3 px-4 rounded-xl bg-white border border-ivory-300 flex flex-wrap items-center gap-6 text-xs text-ink-muted">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-champagne-600" aria-hidden="true" />
                <span>
                  <strong className="text-ink">Net Content:</strong> {product.weight}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-champagne-600" aria-hidden="true" />
                <span>
                  <strong className="text-ink">Burn Time:</strong> ~{product.burnTime}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-champagne-600" aria-hidden="true" />
                <span>
                  <strong className="text-ink">Wax:</strong> 100% Soy Wax
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 text-sm sm:text-base text-ink-muted leading-relaxed">
              <p>{product.description}</p>
            </div>

            {/* Confirmed Fragrance Notes Section */}
            {product.notes ? (
              <div className="mt-8 p-6 rounded-2xl bg-white border border-champagne-300 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-burgundy" aria-hidden="true" />
                  <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-ink">
                    Fragrance Notes Hierarchy
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-ivory-100/70 border border-ivory-200">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-burgundy mb-1">
                      Head Note
                    </span>
                    <span className="font-serif text-sm font-semibold text-ink">
                      {product.notes.head}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-ivory-100/70 border border-ivory-200">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-burgundy mb-1">
                      Heart Note
                    </span>
                    <span className="font-serif text-sm font-semibold text-ink">
                      {product.notes.heart}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-ivory-100/70 border border-ivory-200">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-burgundy mb-1">
                      Base Note
                    </span>
                    <span className="font-serif text-sm font-semibold text-ink">
                      {product.notes.base}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-8 p-5 rounded-2xl bg-ivory-100/70 border border-ivory-300 text-xs text-ink-muted leading-relaxed">
                <span className="font-semibold text-ink">Scent Character:</span> Part of our
                essential amber jar line ({product.weight}). Formulated with pure fragrance oils and
                hand-poured soy wax for a balanced, room-filling throw.
              </div>
            )}

            {/* Amazon Purchase CTA Section */}
            <div className="mt-8 p-6 rounded-2xl bg-burgundy-50 border border-burgundy-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-burgundy font-semibold">
                  Official Availability
                </span>
                <h3 className="font-serif text-lg font-bold text-ink">
                  {product.needsDirectUrl
                    ? 'Explore Collection on Amazon'
                    : 'Available on Amazon India'}
                </h3>
                <p className="text-xs text-ink-muted mt-0.5">
                  Secure checkout, prime delivery, and verified packaging.
                </p>
              </div>

              <AmazonButton
                url={product.amazonUrl}
                needsDirectUrl={product.needsDirectUrl}
                label="Buy on Amazon"
                variant="burgundy"
                size="md"
                className="w-auto shrink-0 self-start sm:self-auto"
              />
            </div>

            {/* Candle Care & Burning Rituals */}
            <div className="mt-10 pt-8 border-t border-ivory-300">
              <h3 className="font-serif text-base font-bold text-ink mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-champagne-700" aria-hidden="true" />
                <span>Soy Wax Candle Care</span>
              </h3>
              <ul className="space-y-2 text-xs text-ink-muted leading-relaxed">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-champagne-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong>First Burn:</strong> Allow the wax to melt completely to the edges of the
                    amber jar to prevent tunneling.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-champagne-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong>Wick Trimming:</strong> Trim cotton wick to 1/4 inch (6mm) before every
                    relight to ensure a smoke-free flame.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-champagne-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong>Burn Duration:</strong> Never burn for more than 4 consecutive hours. Keep
                    away from drafts, children, and pets.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Fragrances */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-ivory-300">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest text-champagne-700 font-semibold">
                Sensory Pairings
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-1">
                You May Also Enjoy
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
