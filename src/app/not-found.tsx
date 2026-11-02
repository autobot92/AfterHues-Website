import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Home, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-ivory flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl border border-ivory-300 p-8 sm:p-10 shadow-lg text-center">
        <div className="w-14 h-14 rounded-full bg-burgundy-50 text-burgundy flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-7 h-7" aria-hidden="true" />
        </div>

        <span className="text-xs uppercase tracking-widest text-champagne-700 font-semibold">
          Error 404
        </span>

        <h1 className="font-serif text-3xl font-bold text-ink mt-2">
          Page Not Found
        </h1>

        <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
          The fragrance or page you are looking for may have moved or is no longer available.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/products"
            className="w-full py-3 px-5 rounded-full text-xs font-semibold tracking-wider uppercase bg-burgundy text-ivory hover:bg-burgundy-600 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" aria-hidden="true" />
            <span>Browse All Fragrances</span>
          </Link>

          <Link
            href="/"
            className="w-full py-3 px-5 rounded-full text-xs font-semibold tracking-wider uppercase bg-ivory-100 hover:bg-ivory-200 text-ink transition-colors flex items-center justify-center gap-2 border border-ivory-300"
          >
            <Home className="w-4 h-4 text-burgundy" aria-hidden="true" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
