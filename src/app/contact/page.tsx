import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/config/site';
import { Mail, Phone, MapPin, Clock, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Have a question about an AfterHues Studio fragrance, collection, or order? Send us a message or get in touch.',
};

export default function ContactPage() {
  return (
    <div className="bg-ivory min-h-screen">
      {/* Header Banner */}
      <div className="bg-burgundy text-ivory py-16 px-4 sm:px-6 lg:px-8 border-b border-champagne-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
            Inquiries &amp; Customer Care
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Contact AfterHues Studio
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Have a question about a fragrance, a collection, or our brand? Send us a message using
            the form below, and our team will follow up using the contact details you provide.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Owner review notice */}
        <div className="mt-4 mb-8 p-4 rounded-xl bg-champagne-100/60 border border-champagne-300 text-ink text-xs leading-relaxed flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <span className="font-semibold text-burgundy">Note for Brand Owner:</span> The contact
            phone number, email address, and physical address listed below are derived from
            supplied business policy documents. Please verify and confirm these contact endpoints
            prior to final production launch.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Card (4 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-ivory-300 p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-ink mb-6 pb-3 border-b border-ivory-200">
                Direct Contact Information
              </h2>

              <ul className="space-y-6 text-sm">
                {/* Physical Address */}
                <li className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-burgundy-50 text-burgundy flex-shrink-0">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-champagne-800">
                      Studio &amp; Office
                    </span>
                    <span className="text-ink text-xs sm:text-sm leading-relaxed mt-1 block">
                      {siteConfig.contact.address}
                    </span>
                  </div>
                </li>

                {/* Email Support */}
                <li className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-burgundy-50 text-burgundy flex-shrink-0">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-champagne-800">
                      Customer Care Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.supportEmail}`}
                      className="text-xs sm:text-sm font-medium text-burgundy hover:underline mt-1 block"
                    >
                      {siteConfig.contact.supportEmail}
                    </a>
                    <span className="text-[11px] text-ink-muted block mt-0.5">
                      Direct: {siteConfig.contact.email}
                    </span>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-burgundy-50 text-burgundy flex-shrink-0">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-champagne-800">
                      Telephone
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-xs sm:text-sm font-medium text-burgundy hover:underline mt-1 block"
                    >
                      +91 {siteConfig.contact.phone}
                    </a>
                  </div>
                </li>

                {/* Business Hours */}
                <li className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-burgundy-50 text-burgundy flex-shrink-0">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-champagne-800">
                      Support Hours
                    </span>
                    <span className="text-xs sm:text-sm text-ink-muted mt-1 block">
                      Monday to Saturday, 10:00 AM – 6:00 PM IST
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Amazon Assistance Note */}
            <div className="p-6 rounded-2xl bg-ivory-200 border border-ivory-300 text-xs text-ink-muted leading-relaxed">
              <span className="font-semibold text-ink">Amazon Orders:</span> For tracking, delivery
              rescheduling, or payment status of orders completed on Amazon, you may also manage
              your order directly within your Amazon account dashboard.
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
