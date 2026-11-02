import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { AmazonButton } from './AmazonButton';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ivory border-t border-champagne-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="inline-block py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne rounded"
              aria-label={`${siteConfig.name} - Homepage`}
            >
              <div className="relative h-12 w-44 invert">
                <Image
                  src={siteConfig.assets.logo}
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-xs text-ivory/70 leading-relaxed max-w-sm">
              Hand-poured soy-wax candles designed around moods and moments. Thoughtful
              fragrance combinations in minimal amber jars to bring calm, warmth, and character to
              your everyday rituals.
            </p>

            <div className="pt-2">
              <AmazonButton
                url={siteConfig.amazonStorefrontUrl}
                label="Visit Amazon Storefront"
                variant="ivory"
                size="sm"
              />
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-champagne">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.footer.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-ivory/80 hover:text-white transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Policies */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-champagne">
              Customer Care
            </h4>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-ivory/80 hover:text-white transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (from central config) */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-champagne">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3 text-xs text-ivory/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-champagne flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.contact.supportEmail}`}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  {siteConfig.contact.supportEmail}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-champagne flex-shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  +91 {siteConfig.contact.phone}
                </a>
              </li>
            </ul>

            {/* Social Links conditional render per brief */}
            {siteConfig.footer.social.length > 0 && (
              <div className="mt-5">
                <h5 className="text-[11px] uppercase tracking-wider text-champagne">Follow Us</h5>
                <div className="flex items-center gap-3 mt-2">
                  {siteConfig.footer.social.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ivory/70 hover:text-white text-xs"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/return-refund-policy" className="hover:text-white transition-colors">
              Return & Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
