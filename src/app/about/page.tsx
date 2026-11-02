import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AmazonButton } from '@/components/AmazonButton';
import { siteConfig } from '@/config/site';
import { Sparkles, Layers, PackageCheck, Flame, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about AfterHues Studio — hand-poured soy-wax candles crafted to shape the feeling of your spaces.',
};

export default function AboutPage() {
  return (
    <div className="bg-ivory min-h-screen">
      {/* Header Banner */}
      <div className="bg-burgundy text-ivory py-16 px-4 sm:px-6 lg:px-8 border-b border-champagne-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
            Our Story & Craft
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            About AfterHues Studio
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Thoughtfully crafted home fragrances designed to bring calm, warmth, and character to
            your everyday spaces.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* Narrative Section 1 */}
        <div className="mt-6 bg-white rounded-3xl border border-ivory-300 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <span className="text-xs uppercase tracking-widest text-champagne-700 font-semibold">
                Atmosphere & Intention
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-2">
                Shaping the Feeling of a Space
              </h2>
              <div className="mt-5 space-y-4 text-sm sm:text-base text-ink-muted leading-relaxed">
                <p>
                  At AfterHues Studio, we believe fragrance can shape the feeling of a space. Our
                  candle collections are designed around different moods and moments—from soft
                  florals and comforting gourmand notes to deeper woods and calm, spa-inspired blends.
                </p>
                <p>
                  Our hand-poured soy-wax candles bring together considered fragrance combinations
                  and clean, understated packaging. Whether you are creating a quiet evening ritual,
                  refreshing your workspace, or choosing a thoughtful gift, our collections make it
                  easier to explore a scent that fits the moment.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-2xl bg-ivory-100 p-6 flex items-center justify-center border border-ivory-300 shadow-inner">
                <Image
                  src="/images/products/cafe-vanilla-melt/02.png"
                  alt="AfterHues Studio Hand-Poured Candle in Amber Jar"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach Cards */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-champagne-700 font-semibold">
              The Principles Behind Every Jar
            </span>
            <h2 className="font-serif text-3xl font-bold text-ink mt-2">Our Approach</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-ivory-300 p-8 shadow-sm flex flex-col justify-between hover:border-champagne-400 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-burgundy-50 text-burgundy flex items-center justify-center mb-5">
                  <Layers className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink">
                  Fragrance-led Collections
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Explore scents by mood and style, including Floral Luxury, Modern Minimal, For
                  Him, For Her, and Spiritual &amp; Yoga.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-ivory-200 text-xs font-semibold text-champagne-700">
                7 Distinct Profiles
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-ivory-300 p-8 shadow-sm flex flex-col justify-between hover:border-champagne-400 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-burgundy-50 text-burgundy flex items-center justify-center mb-5">
                  <PackageCheck className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink">
                  Thoughtful Presentation
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Minimal packaging and warm amber jars keep the focus on the fragrance and the
                  atmosphere it creates.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-ivory-200 text-xs font-semibold text-champagne-700">
                Timeless Amber Glass
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-ivory-300 p-8 shadow-sm flex flex-col justify-between hover:border-champagne-400 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-burgundy-50 text-burgundy flex items-center justify-center mb-5">
                  <Flame className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink">
                  Made for Everyday Rituals
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  From an everyday reset to a slow evening, find a scent for the moments you want to
                  make your own.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-ivory-200 text-xs font-semibold text-champagne-700">
                Clean 20-Hour Burn
              </div>
            </div>
          </div>
        </div>

        {/* Closing Banner with exact closing line */}
        <div className="mt-16 bg-burgundy text-ivory rounded-3xl p-8 sm:p-12 text-center border border-champagne-800 shadow-lg">
          <Sparkles className="w-6 h-6 text-champagne mx-auto mb-3" aria-hidden="true" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Find your atmosphere. Make it AfterHues.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-ivory/80 max-w-lg mx-auto">
            Discover the hand-poured soy-wax candle collection crafted to bring character to your home.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-ivory text-burgundy hover:bg-white transition-colors"
            >
              <span>Explore All Candles</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <AmazonButton
              url={siteConfig.amazonStorefrontUrl}
              label="Shop on Amazon"
              variant="outline"
              size="md"
              className="!text-ivory !border-champagne hover:!bg-ivory/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
