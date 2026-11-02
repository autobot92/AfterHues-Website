export type CategoryName =
  | 'FLORAL LUXURY'
  | 'GOUMAND & PRETTY'
  | 'DARK-WOODS & BARBERSHOP'
  | 'MODERN MINIMAL'
  | 'FOR HIM'
  | 'FOR HER'
  | 'SPIRITUAL & YOGA';

export interface FragranceNotes {
  head: string;
  heart: string;
  base: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  displayName?: string;
  images: string[];
  notes: FragranceNotes | null;
  weight: string;
  burnTime: string;
  wax: string;
  asin: string | null;
  amazonUrl: string;
  needsDirectUrl: boolean;
  categories: CategoryName[];
  tagline?: string;
  description: string;
  featured?: boolean;
}

export interface CategoryInfo {
  name: CategoryName;
  slug: string;
  description: string;
  coverImage: string;
  productSlugs: string[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  mobile?: string;
  message: string;
  honeypot?: string;
  timestamp?: number;
}
