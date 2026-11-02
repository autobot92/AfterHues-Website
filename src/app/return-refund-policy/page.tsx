import React from 'react';
import type { Metadata } from 'next';
import { PolicyLayout } from '@/components/PolicyLayout';
import { siteConfig } from '@/config/site';
import { Video, Camera, Package, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Return & Refund Policy',
  description:
    'Review the return, exchange, and damage resolution policy for AfterHues Studio hand-poured candles.',
};

export default function ReturnRefundPolicyPage() {
  return (
    <PolicyLayout
      title="Return & Refund Policy"
      subtitle="Important details regarding return eligibility, damaged arrivals, and resolution procedures."
      lastUpdated={siteConfig.policies.lastUpdated}
    >
      <div className="space-y-8">
        {/* Section 1 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-ink mb-3">
            Return &amp; Exchange Eligibility
          </h2>
          <p className="leading-relaxed">
            Please note that all products purchased from our brand are <strong>not eligible for return or exchange</strong> due to the delicate, hand-poured nature of artisanal soy-wax items.
          </p>
          <p className="mt-3 leading-relaxed">
            We kindly request customers to review all fragrance notes, product dimensions, and jar specifications carefully prior to placing an order.
          </p>
        </section>

        <hr className="border-ivory-300" />

        {/* Section 2 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-ink mb-3">
            Damaged, Defective, or Incorrect Product
          </h2>
          <p className="leading-relaxed">
            In the unlikely event that you receive a damaged, defective, or incorrect candle, you must notify our customer support team within <strong>24 hours of delivery</strong>.
          </p>

          <p className="mt-4 font-semibold text-ink text-sm">
            To initiate an expedited resolution process, please ensure you supply the following:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-200 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-burgundy-50 text-burgundy flex items-center justify-center mb-2.5">
                <Video className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="font-semibold text-ink text-xs mb-1">Unboxing Video</h4>
              <p className="text-[11px] text-ink-muted">
                Recorded continuously from the initial opening of the parcel.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-200 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-burgundy-50 text-burgundy flex items-center justify-center mb-2.5">
                <Camera className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="font-semibold text-ink text-xs mb-1">Clear Photographs</h4>
              <p className="text-[11px] text-ink-muted">
                High-resolution images clearly displaying the damage or discrepancy.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-200 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-burgundy-50 text-burgundy flex items-center justify-center mb-2.5">
                <Package className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="font-semibold text-ink text-xs mb-1">Original Packaging</h4>
              <p className="text-[11px] text-ink-muted">
                Images of the shipping box, outer label, and internal protective materials.
              </p>
            </div>
          </div>

          <div className="mt-6 p-5 rounded-2xl bg-burgundy-50 border border-burgundy-200 flex items-start gap-3.5">
            <Mail className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs sm:text-sm text-ink leading-relaxed">
                Kindly email all required evidence along with your order ID and contact details to:
              </p>
              <a
                href={`mailto:${siteConfig.contact.supportEmail}`}
                className="font-semibold text-burgundy hover:underline text-sm sm:text-base mt-1 inline-block"
              >
                {siteConfig.contact.supportEmail}
              </a>
              <p className="text-xs text-ink-muted mt-1">
                Our care team will review your case and initiate appropriate remedial action at the earliest.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-ivory-300" />

        {/* Section 3 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-ink mb-3">
            Failed Online Transactions
          </h2>
          <p className="leading-relaxed">
            For unsuccessful or failed online transactions, the debited amount will be automatically reversed and credited back to the original payment source account within <strong>7 working days</strong>, subject to standard banking cycles.
          </p>
        </section>

        <hr className="border-ivory-300" />

        {/* Section 4 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-ink mb-3">
            Amazon Orders Notice
          </h2>
          <p className="leading-relaxed">
            For orders placed via our official{' '}
            <a
              href={siteConfig.amazonStorefrontUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-burgundy underline hover:text-burgundy-700"
            >
              Amazon Storefront
            </a>
            , returns and damage replacements are additionally governed by Amazon India&apos;s standard marketplace customer service policies. You may initiate returns or request replacements directly through your Amazon &ldquo;Your Orders&rdquo; portal.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
