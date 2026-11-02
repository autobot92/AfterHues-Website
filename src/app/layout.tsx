import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OrganizationJsonLd } from '@/components/JsonLd';
import { siteConfig } from '@/config/site';

const serifFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Hand-Poured Soy Wax Candles`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'AfterHues Studio',
    'soy wax candles',
    'hand-poured candles',
    'luxury scented candles',
    'aromatherapy candles',
    'amber jar candles',
    'home fragrance',
    'AfterHues',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL('https://afterhues.com'),
  icons: {
    icon: [
      { url: siteConfig.assets.favicon, type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: siteConfig.assets.favicon }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://afterhues.com',
    title: `${siteConfig.name} — A Scent for Every Hue.`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/products/nightwood/02.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Soy Wax Candles`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — A Scent for Every Hue.`,
    description: siteConfig.description,
    images: ['/images/products/nightwood/02.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans antialiased bg-ivory text-ink selection:bg-champagne-300 selection:text-burgundy">
        <OrganizationJsonLd />
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
