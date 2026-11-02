'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { AmazonButton } from './AmazonButton';
import { X } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  // Close only when the route actually changes (not on every render)
  const previousPathname = useRef(pathname);
  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Escape key closes drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-ivory shadow-2xl p-6 flex flex-col justify-between border-l border-champagne-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-ivory-300">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <div className="relative h-9 w-28">
                <Image
                  src={siteConfig.assets.logo}
                  alt={siteConfig.name}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 rounded-full hover:bg-ivory-200 text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="mt-8 flex flex-col gap-4">
            {siteConfig.nav.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`text-lg font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-burgundy text-ivory font-semibold'
                      : 'text-ink hover:text-burgundy hover:bg-ivory-200'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer in drawer */}
        <div className="pt-6 border-t border-ivory-300 flex flex-col gap-4">
          <AmazonButton
            url={siteConfig.amazonStorefrontUrl}
            label="Shop on Amazon"
            variant="burgundy"
            size="md"
            className="w-full"
          />

          <div className="text-center text-xs text-ink-muted">
            Hand-Poured Soy Wax Candles
          </div>
        </div>
      </div>
    </div>
  );
};
