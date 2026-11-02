import { CategoryInfo, CategoryName } from '@/types';
import { products } from './products';

export const categories: CategoryInfo[] = [
  {
    name: 'FLORAL LUXURY',
    slug: 'floral-luxury',
    description: 'Soft, opulent blossoms and velvety petals designed for graceful, blooming atmospheres.',
    coverImage: '/images/products/moonlit-jasmine/02.png',
    productSlugs: [
      'moonlit-jasmine',
      'jasmine-whisper',
      'velvet-rose-creme',
      'silk-bouquet',
      'rose-strawberry-macaron',
      'garden-cafe',
    ],
  },
  {
    name: 'GOUMAND & PRETTY',
    slug: 'goumand-pretty',
    description: 'Warm, confectionary notes of roasted espresso, sweet creams, and decadent vanilla.',
    coverImage: '/images/products/cafe-vanilla-melt/02.png',
    productSlugs: [
      'sandalwood-espresso',
      'cafe-vanilla-melt',
      'strawberry-cream-cloud',
      'coffee',
      'velvet-rose-creme',
      'rose-strawberry-macaron',
    ],
  },
  {
    name: 'DARK-WOODS & BARBERSHOP',
    slug: 'dark-woods-barbershop',
    description: 'Deep, masculine notes of smoked woods, fresh aromatic mints, and rich amber warmth.',
    coverImage: '/images/products/nightwood/02.png',
    productSlugs: [
      'sandalwood-espresso',
      'nightwood',
      'nordic-stag',
      'spa-slush',
    ],
  },
  {
    name: 'MODERN MINIMAL',
    slug: 'modern-minimal',
    description: 'Clean, understated scents with citrus clarity and calming botanicals for uncluttered spaces.',
    coverImage: '/images/products/calm-heaven/02.png',
    productSlugs: [
      'lemongrass-breeze',
      'calm-heaven',
      'coffee',
      'garden-cafe',
      'spa-slush',
    ],
  },
  {
    name: 'FOR HIM',
    slug: 'for-him',
    description: 'Robust, grounding fragrances featuring roasted coffee, forest herbs, and cedarwood depths.',
    coverImage: '/images/products/nordic-stag/02.png',
    productSlugs: [
      'nightwood',
      'nordic-stag',
      'coffee',
      'calm-heaven',
      'lemongrass-breeze',
      'cafe-vanilla-melt',
    ],
  },
  {
    name: 'FOR HER',
    slug: 'for-her',
    description: 'Delicate florals, playful berries, and silky creams crafted for personal moments of joy.',
    coverImage: '/images/products/strawberry-cream-cloud/02.png',
    productSlugs: [
      'moonlit-jasmine',
      'jasmine-whisper',
      'strawberry-cream-cloud',
      'rose-strawberry-macaron',
      'garden-cafe',
      'velvet-rose-creme',
      'silk-bouquet',
      'spa-slush',
    ],
  },
  {
    name: 'SPIRITUAL & YOGA',
    slug: 'spiritual-yoga',
    description: 'Meditative night jasmine and calming aromatics to accompany yoga, breathwork, and quiet reflection.',
    coverImage: '/images/products/jasmine-whisper/01.png',
    productSlugs: [
      'moonlit-jasmine',
      'jasmine-whisper',
    ],
  },
];

export const getCategoryByName = (name: CategoryName): CategoryInfo | undefined => {
  return categories.find((c) => c.name === name);
};

export const getCategoryBySlug = (slug: string): CategoryInfo | undefined => {
  return categories.find((c) => c.slug === slug);
};

export const getProductsForCategory = (categoryName: CategoryName) => {
  const category = getCategoryByName(categoryName);
  if (!category) return [];

  // Map preserving the EXACT order specified in the brief
  return category.productSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is (typeof products)[number] => p !== undefined);
};
