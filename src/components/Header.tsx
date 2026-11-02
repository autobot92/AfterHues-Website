'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { AmazonButton } from './AmazonButton';
import { MobileNav } from './MobileNav';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const closeMobileNav = useCallback(() => setMobileNavOpen(false), []);

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-burgundy focus:text-ivory focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-champagne"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full bg-ivory/90 backdrop-blur-md border-b border-champagne-300 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded-lg py-1 px-1.5"
            aria-label={`${siteConfig.name} - Return to Homepage`}
          >
            <div className="relative h-12 w-36 sm:w-44">
              <Image
                src={siteConfig.assets.logo}
                alt={siteConfig.name}
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {siteConfig.nav.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded ${
                    isActive
                      ? 'text-burgundy font-semibold'
                      : 'text-ink-muted hover:text-burgundy'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-burgundy rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Amazon CTA + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <AmazonButton
                url={siteConfig.amazonStorefrontUrl}
                label="Shop on Amazon"
                variant="burgundy"
                size="sm"
              />
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileNavOpen}
              className="md:hidden p-2.5 rounded-lg text-ink hover:text-burgundy hover:bg-ivory-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={closeMobileNav} />
    </>
  );
};
