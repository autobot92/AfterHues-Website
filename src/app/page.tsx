import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { categories } from '@/data/categories';
import { getFeaturedProducts } from '@/data/products';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductCard } from '@/components/ProductCard';
import { AmazonButton } from '@/components/AmazonButton';
import { Sparkles, ArrowRight, Flame, Shield, Heart } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-burgundy text-ivory py-20 lg:py-28">
        {/* Subtle background glow/radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-burgundy-600 via-burgundy to-burgundy-900 opacity-90" />
        
        {/* Delicate champagne accent border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Copy */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory/10 border border-champagne/30 text-champagne text-xs font-semibold tracking-widest uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{siteConfig.hero.eyebrow}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory leading-[1.15]">
                {siteConfig.hero.headline}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-ivory/85 leading-relaxed max-w-xl">
                {siteConfig.hero.supporting}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 px-6 py-3 text-sm font-semibold tracking-wide bg-ivory text-burgundy hover:bg-white active:bg-ivory-200 shadow-lg border border-champagne-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ivory"
                >
                  <span>{siteConfig.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>

                <AmazonButton
                  url={siteConfig.amazonStorefrontUrl}
                  label={siteConfig.hero.secondaryCta}
                  variant="outline"
                  size="md"
                  className="!text-ivory !border-champagne hover:!bg-ivory/10 focus-visible:!ring-ivory"
                />
              </div>

              {/* Verified Product Quality Features */}
              <div className="mt-12 pt-8 border-t border-ivory/15 grid grid-cols-3 gap-4 text-xs text-ivory/80">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-champagne flex-shrink-0" aria-hidden="true" />
                  <span>100% Soy Wax</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-champagne flex-shrink-0" aria-hidden="true" />
                  <span>20 Hr Clean Burn</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-champagne flex-shrink-0" aria-hidden="true" />
                  <span>Warm Amber Jars</span>
                </div>
              </div>
            </div>

            {/* Right Column: Real Supplied Product Hero Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-ivory/10 border border-champagne/30 p-6 backdrop-blur-sm shadow-2xl flex items-center justify-center">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/products/nightwood/02.png"
                    alt="AfterHues Studio Nightwood Hand-Poured Soy Wax Candle in Amber Jar"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-contain p-2 hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-ivory text-burgundy shadow-xl border border-champagne-300 text-xs font-serif font-bold tracking-wide">
                  Nightwood · Amber Jar Collection
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHOP BY CATEGORY SECTION */}
      <section className="py-20 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-champagne-700 font-semibold">
              Curated Fragrance Profiles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-2">
              Shop by Category
            </h2>
            <p className="mt-3 text-sm text-ink-muted leading-relaxed">
              Explore our seven distinct collections crafted around individual moods, seasons, and
              interior atmospheres.
            </p>
          </div>

          {/* All 7 exact categories in a responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED FRAGRANCES SECTION */}
      <section className="py-20 bg-white border-y border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-champagne-700 font-semibold">
                Signature Selection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-2">
                Featured Fragrances
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                Explore hand-poured favorites from our amber jar collection.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-burgundy hover:text-burgundy-800 underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded py-1"
            >
              <span>View All 15 Candles</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.slice(0, 6).map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx < 3} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. BRAND STORY TEASER */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual preview */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-white border border-ivory-300 shadow-lg p-6">
                <Image
                  src="/images/products/moonlit-jasmine/02.png"
                  alt="AfterHues Studio Hand-Poured Soy Wax Candles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-contain p-4"
                />
              </div>
            </div>

            {/* Story text using supplied copy */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-widest text-champagne-700 font-semibold">
                Our Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-2 leading-tight">
                Shaping the Feeling of Your Spaces
              </h2>
              <p className="mt-5 text-sm sm:text-base text-ink-muted leading-relaxed">
                At AfterHues Studio, we believe fragrance can shape the feeling of a space. Our
                candle collections are designed around different moods and moments—from soft
                florals and comforting gourmand notes to deeper woods and calm, spa-inspired blends.
              </p>
              <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed">
                Our hand-poured soy-wax candles bring together considered fragrance combinations
                and clean, understated packaging. Whether you are creating a quiet evening ritual,
                refreshing your workspace, or choosing a thoughtful gift, our collections make it
                easier to explore a scent that fits the moment.
              </p>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-burgundy text-ivory hover:bg-burgundy-600 transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLEAN BRAND CTA */}
      <section className="py-20 bg-burgundy text-ivory border-t border-champagne-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
            Find Your Atmosphere
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Make it AfterHues.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ivory/80 max-w-xl mx-auto leading-relaxed">
            Browse our full catalog of 15 hand-poured fragrances or visit our official Amazon
            Storefront for easy doorstep delivery across India.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-ivory text-burgundy hover:bg-white shadow-md transition-colors"
            >
              Browse All Fragrances
            </Link>
            <AmazonButton
              url={siteConfig.amazonStorefrontUrl}
              label="Visit Amazon Storefront"
              variant="outline"
              size="md"
              className="!text-ivory !border-champagne hover:!bg-ivory/10"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
