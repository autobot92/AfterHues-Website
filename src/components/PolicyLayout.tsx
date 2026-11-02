import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from './Breadcrumbs';
import { siteConfig } from '@/config/site';
import { AlertCircle, Clock, ShieldCheck } from 'lucide-react';

interface PolicyLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export const PolicyLayout: React.FC<PolicyLayoutProps> = ({
  title,
  subtitle,
  lastUpdated = siteConfig.policies.lastUpdated,
  children,
}) => {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Header Banner */}
      <div className="bg-burgundy text-ivory py-16 px-4 sm:px-6 lg:px-8 border-b border-champagne-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
            Legal & Customer Care
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            {title}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-champagne-300">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: title }]} />

        {/* Owner Review / Amazon Note Banner */}
        <div className="my-6 p-4 rounded-xl bg-champagne-100/60 border border-champagne-300 text-ink text-xs leading-relaxed flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <span className="font-semibold text-burgundy">Customer Information Note:</span>{' '}
            AfterHues Studio candles are made available for purchase via our official Amazon
            Storefront. All payment transactions, checkout processing, and platform fulfillment are
            handled according to Amazon&apos;s marketplace policies and systems.
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl border border-ivory-300 p-6 sm:p-10 shadow-sm prose prose-sm sm:prose-base max-w-none text-ink-muted">
          {children}
        </div>

        {/* Help & Contact Prompt */}
        <div className="mt-10 p-6 rounded-2xl bg-ivory-200 border border-ivory-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-burgundy flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-serif text-sm font-semibold text-ink">Have questions regarding our policies?</h3>
              <p className="text-xs text-ink-muted">Our customer care team is available to assist you.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-burgundy text-ivory hover:bg-burgundy-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
          >
            Contact Customer Care
          </Link>
        </div>
      </div>
    </div>
  );
};
