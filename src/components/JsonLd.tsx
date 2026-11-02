import React from 'react';
import { siteConfig } from '@/config/site';
import { Product } from '@/types';

export const OrganizationJsonLd: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `https://afterhues.com${siteConfig.assets.logo}`,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+91-${siteConfig.contact.phone}`,
      contactType: 'customer service',
      email: siteConfig.contact.supportEmail,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11486-E, Sant Nagar Road, Rani Bagh',
      addressLocality: 'New Delhi',
      postalCode: '110034',
      addressCountry: 'IN',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ProductJsonLd: React.FC<{ product: Product }> = ({ product }) => {
  // Only include verified fields per brief. No fake ratings, prices, or discounts.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.displayName || product.name,
    image: product.images.map((img) => `https://afterhues.com${img}`),
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    category: product.categories.join(', '),
    offers: {
      '@type': 'Offer',
      url: product.amazonUrl,
      seller: {
        '@type': 'Organization',
        name: 'Amazon India',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
