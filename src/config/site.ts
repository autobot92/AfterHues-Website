export const siteConfig = {
  name: 'AfterHues Studio',
  legalName: 'AfterHues Studio',
  description:
    'Hand-poured soy-wax candles designed to bring a little more calm, warmth, and character to your everyday spaces.',
  url: 'https://afterhues.com',
  amazonStorefrontUrl:
    'https://www.amazon.in/stores/page/94C16080-80EE-447E-8618-38C71AD7C1C7?ingress=2&lp_context_asin=B0GS2G2ZXX&visitId=12814154-4a25-414a-aae6-bdbfb9b174d5&ref_=ast_bln',
  assets: {
    logo: '/Brand_Assets/Website_Logo.png',
    favicon: '/Brand_Assets/Favicon.png',
  },
  palette: {
    burgundy: '#85000F',
    ivory: '#F7F3ED',
    champagne: '#B99B7A',
  },
  contact: {
    phone: '9410057736',
    email: 'divyansh.gpt@gmail.com',
    supportEmail: 'customercare@afterhues.com',
    address: '11486-E, Sant Nagar Road, Rani Bagh, New Delhi – 110034, India',
    confirmationRequired: true,
  },
  hero: {
    eyebrow: 'AFTERHUES STUDIO',
    headline: 'A Scent for Every Hue.',
    supporting:
      'Hand-poured soy-wax candles designed to bring a little more calm, warmth, and character to your everyday spaces.',
    primaryCta: 'Explore the Collection',
    secondaryCta: 'Shop on Amazon',
    alternatives: [
      {
        headline: 'Let Every Space Tell a Story.',
        supporting:
          'Discover thoughtfully crafted fragrances for quiet mornings, slow evenings, and everything in between.',
      },
      {
        headline: 'Set the Mood. Leave a Memory.',
        supporting:
          'Find a fragrance that feels like you, from floral softness to deep, woody warmth.',
      },
    ],
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Contact Us', href: '/contact' },
  ],
  footer: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Our Products', href: '/products' },
    ],
    quickLinks: [
      { label: 'Return & Refund Policy', href: '/return-refund-policy' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Contact Us', href: '/contact' },
    ],
    // Only render social links if actual URLs are supplied; otherwise omit social icons per brief
    social: [] as { name: string; href: string }[],
  },
  policies: {
    lastUpdated: 'October 17, 2026',
  },
};
