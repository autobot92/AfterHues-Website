import { Product } from '@/types';
import { siteConfig } from '@/config/site';

export const products: Product[] = [
  {
    id: 'cafe-vanilla-melt',
    slug: 'cafe-vanilla-melt',
    name: 'Cafe Vanilla Melt',
    displayName: 'Café Vanilla Melt',
    images: [
      '/images/products/cafe-vanilla-melt/02.png',
      '/images/products/cafe-vanilla-melt/01.png',
      '/images/products/cafe-vanilla-melt/03.png',
    ],
    notes: {
      head: 'Coffee',
      heart: 'Vanilla',
      base: 'Sandalwood',
    },
    weight: '100 g',
    burnTime: '20 Hours',
    wax: 'Hand-poured Soy Wax',
    asin: 'B0GRTJRQLG',
    amazonUrl:
      'https://www.amazon.in/AfterHuesTM-Vanilla-Hand-Poured-Candle-Sandalwood/dp/B0GRTJRQLG?ref_=ast_sto_dp',
    needsDirectUrl: false,
    categories: ['GOUMAND & PRETTY', 'FOR HIM'],
    tagline: 'Warm roasted coffee with sweet velvety vanilla and grounding sandalwood.',
    description:
      'A comforting, gourmand fragrance that blends aromatic coffee beans with warm, creamy vanilla and an earthy foundation of sandalwood. Designed to bring instant warmth and coziness to any morning or relaxed evening.',
    featured: true,
  },
  {
    id: 'calm-heaven',
    slug: 'calm-heaven',
    name: 'Calm Heaven',
    images: [
      '/images/products/calm-heaven/02.png',
      '/images/products/calm-heaven/01.png',
      '/images/products/calm-heaven/03.png',
    ],
    notes: {
      head: 'Lavender',
      heart: 'Vanilla',
      base: 'Sandalwood',
    },
    weight: '100 g',
    burnTime: '20 Hours',
    wax: 'Hand-poured Soy Wax',
    asin: 'B0GS1277B4',
    amazonUrl:
      'https://www.amazon.in/AfterHuesTM-Hand-Poured-Lavender-Vanilla-Sandalwood/dp/B0GS1277B4?ref_=ast_sto_dp',
    needsDirectUrl: false,
    categories: ['MODERN MINIMAL', 'FOR HIM'],
    tagline: 'Calming lavender infused with smooth vanilla and deep sandalwood.',
    description:
      'An invitation to slow down and decompress. A soothing head of French lavender softens into sweet vanilla, balanced by a serene sandalwood base that lingers softly in personal sanctuaries.',
    featured: true,
  },
  {
    id: 'garden-cafe',
    slug: 'garden-cafe',
    name: 'Garden Cafe',
    displayName: 'Garden Café',
    images: [
      '/images/products/garden-cafe/02.png',
      '/images/products/garden-cafe/01.png',
      '/images/products/garden-cafe/03.png',
    ],
    notes: {
      head: 'Strawberry',
      heart: 'Jasmine',
      base: 'Coffee, Vanilla',
    },
    weight: '100 g',
    burnTime: '20 Hours',
    wax: 'Hand-poured Soy Wax',
    asin: 'B0GS14VD3R',
    amazonUrl:
      'https://www.amazon.in/AfterHuesTM-Hand-Poured-Strawberry-Jasmine-Vanilla/dp/B0GS14VD3R?ref_=ast_sto_dp',
    needsDirectUrl: false,
    categories: ['FLORAL LUXURY', 'MODERN MINIMAL', 'FOR HER'],
    tagline: 'Sunlit wild strawberry and night jasmine layered on coffee and vanilla.',
    description:
      'A whimsical, layered fragrance capturing the magic of a garden brunch. Ripe wild strawberries and delicate blooming jasmine meet the grounded richness of dark coffee and sweet vanilla.',
  },
  {
    id: 'moonlit-jasmine',
    slug: 'moonlit-jasmine',
    name: 'Moonlit Jasmine',
    images: [
      '/images/products/moonlit-jasmine/02.png',
      '/images/products/moonlit-jasmine/01.png',
      '/images/products/moonlit-jasmine/03.png',
    ],
    notes: {
      head: 'Lemongrass',
      heart: 'Jasmine, Rose',
      base: 'Sandalwood, Vanilla',
    },
    weight: '100 g',
    burnTime: '20 Hours',
    wax: 'Hand-poured Soy Wax',
    asin: 'B0GS12V684',
    amazonUrl:
      'https://www.amazon.in/AfterHuesTM-Moonlit-Hand-Poured-Lemongrass-Sandalwood/dp/B0GS12V684?ref_=ast_sto_dp',
    needsDirectUrl: false,
    categories: ['FLORAL LUXURY', 'FOR HER', 'SPIRITUAL & YOGA'],
    tagline: 'Zesty lemongrass rising into nocturnal jasmine and precious rose.',
    description:
      'Luminous and tranquil, Moonlit Jasmine combines the refreshing crispness of lemongrass with a lavish floral heart of night-blooming jasmine and velvety rose, rooted in warm sandalwood and vanilla.',
    featured: true,
  },
  {
    id: 'nightwood',
    slug: 'nightwood',
    name: 'Nightwood',
    images: [
      '/images/products/nightwood/02.png',
      '/images/products/nightwood/01.png',
      '/images/products/nightwood/03.png',
    ],
    notes: {
      head: 'Lemongrass',
      heart: 'Coffee',
      base: 'Sandalwood, Vanilla',
    },
    weight: '100 g',
    burnTime: '20 Hours',
    wax: 'Hand-poured Soy Wax',
    asin: 'B0GS1MSWTK',
    amazonUrl:
      'https://www.amazon.in/AfterHuesTM-Nightwood-Hand-Poured-Lemongrass-Sandalwood/dp/B0GS1MSWTK?ref_=ast_sto_dp',
    needsDirectUrl: false,
    categories: ['DARK-WOODS & BARBERSHOP', 'FOR HIM'],
    tagline: 'Crisp lemongrass meets bold roasted coffee and deep sandalwood woods.',
    description:
      'A deeply magnetic, sophisticated fragrance. The bright opening of lemongrass provides an intriguing contrast to roasted coffee, settling into a rich, shadowed accord of sandalwood and vanilla.',
    featured: true,
  },
  {
    id: 'nordic-stag',
    slug: 'nordic-stag',
    name: 'Nordic Stag',
    images: [
      '/images/products/nordic-stag/02.png',
      '/images/products/nordic-stag/01.png',
      '/images/products/nordic-stag/03.png',
    ],
    notes: {
      head: 'Peppermint, Lemongrass',
      heart: 'Lavender',
      base: 'Sandalwood',
    },
    weight: '100 g',
    burnTime: '20 Hours',
    wax: 'Hand-poured Soy Wax',
    asin: 'B0GS1CZDDF',
    amazonUrl:
      'https://www.amazon.in/AfterHuesTM-Hand-Poured-Peppermint-Lemongrass-Sandalwood/dp/B0GS1CZDDF?ref_=ast_sto_dp',
    needsDirectUrl: false,
    categories: ['DARK-WOODS & BARBERSHOP', 'FOR HIM'],
    tagline: 'Cool peppermint, crisp lemongrass, and herbal lavender on woodland sandalwood.',
    description:
      'Evoking an alpine morning in a northern forest. An icy crest of peppermint and lemongrass cascades into herbal lavender, supported by the quiet strength of seasoned sandalwood.',
    featured: true,
  },
  {
    id: 'rose-strawberry-macaron',
    slug: 'rose-strawberry-macaron',
    name: 'Rose Strawberry Macaron',
    images: [
      '/images/products/rose-strawberry-macaron/02.png',
      '/images/products/rose-strawberry-macaron/01.png',
      '/images/products/rose-strawberry-macaron/03.png',
    ],
    notes: {
      head: 'Strawberry',
      heart: 'Rose',
      base: 'Vanilla',
    },
    weight: '100 g',
    burnTime: '20 Hours',
    wax: 'Hand-poured Soy Wax',
    asin: 'B0GS1K3F2B',
    amazonUrl:
      'https://www.amazon.in/AfterHuesTM-Strawberry-Macaron-Hand-Poured-Fragrance/dp/B0GS1K3F2B?ref_=ast_sto_dp',
    needsDirectUrl: false,
    categories: ['FLORAL LUXURY', 'GOUMAND & PRETTY', 'FOR HER'],
    tagline: 'Sugared strawberry glaze, fresh garden rose petals, and warm pastry vanilla.',
    description:
      'Sweet, delicate, and playfully refined. Ripe strawberries blend with the romance of pink rose petals over an irresistible bakery-warm base of rich vanilla.',
  },
  {
    id: 'sandalwood-espresso',
    slug: 'sandalwood-espresso',
    name: 'Sandalwood Espresso',
    images: [
      '/images/products/sandalwood-espresso/02.png',
      '/images/products/sandalwood-espresso/01.png',
      '/images/products/sandalwood-espresso/03.png',
    ],
    notes: {
      head: 'Peppermint',
      heart: 'Coffee',
      base: 'Sandalwood, Vanilla',
    },
    weight: '100 g',
    burnTime: '20 Hours',
    wax: 'Hand-poured Soy Wax',
    asin: 'B0GS1PVZ69',
    amazonUrl:
      'https://www.amazon.in/AfterHuesTM-Sandalwood-Espresso-Hand-Poured-Peppermint/dp/B0GS1PVZ69?ref_=ast_sto_dp',
    needsDirectUrl: false,
    categories: ['GOUMAND & PRETTY', 'DARK-WOODS & BARBERSHOP'],
    tagline: 'Frosty peppermint meets bold espresso beans, creamy vanilla, and sandalwood.',
    description:
      'A thrilling interplay of cold and warmth. The crisp bite of peppermint opens the senses before plunging into a robust brew of dark espresso, mellowed by ambered sandalwood and vanilla.',
  },
  {
    id: 'silk-bouquet',
    slug: 'silk-bouquet',
    name: 'Silk Bouquet',
    images: [
      '/images/products/silk-bouquet/02.png',
      '/images/products/silk-bouquet/01.png',
      '/images/products/silk-bouquet/03.png',
    ],
    notes: {
      head: 'Lavender',
      heart: 'Rose, Jasmine',
      base: 'Vanilla',
    },
    weight: '100 g',
    burnTime: '20 Hours',
    wax: 'Hand-poured Soy Wax',
    asin: 'B0GS1Z96TN',
    amazonUrl:
      'https://www.amazon.in/AfterHuesTM-Bouquet-Hand-Poured-Lavender-Jasmine/dp/B0GS1Z96TN?ref_=ast_sto_dp',
    needsDirectUrl: false,
    categories: ['FLORAL LUXURY', 'FOR HER'],
    tagline: 'French lavender, velvety rose, and night jasmine embraced by soft vanilla.',
    description:
      'Like silk brushing against skin. A refined floral bouquet showcasing timeless lavender, blushing rose petals, and jasmine blossoms, finished with the gentle comforting sweetness of pure vanilla.',
  },
  {
    id: 'spa-slush',
    slug: 'spa-slush',
    name: 'Spa Slush',
    images: [
      '/images/products/spa-slush/02.png',
      '/images/products/spa-slush/01.png',
      '/images/products/spa-slush/03.png',
    ],
    notes: {
      head: 'Lemongrass, Peppermint',
      heart: 'Lavender',
      base: 'Vanilla',
    },
    weight: '100 g',
    burnTime: '20 Hours',
    wax: 'Hand-poured Soy Wax',
    asin: 'B0GS28BXJ7',
    amazonUrl:
      'https://www.amazon.in/AfterHuesTM-Hand-Poured-Lemongrass-Peppermint-Lavender/dp/B0GS28BXJ7?ref_=ast_sto_dp',
    needsDirectUrl: false,
    categories: ['DARK-WOODS & BARBERSHOP', 'MODERN MINIMAL', 'FOR HER'],
    tagline: 'Revitalizing lemongrass, icy mint, calming lavender, and smooth vanilla.',
    description:
      'An invigorating wellness escape in a jar. Refreshing lemongrass and tingling peppermint awaken the senses, melting into relaxing spa lavender and subtle sweet vanilla.',
  },
  {
    id: 'strawberry-cream-cloud',
    slug: 'strawberry-cream-cloud',
    name: 'Strawberry Cream Cloud',
    displayName: 'Strawberry Crème Cloud',
    images: [
      '/images/products/strawberry-cream-cloud/02.png',
      '/images/products/strawberry-cream-cloud/01.png',
      '/images/products/strawberry-cream-cloud/03.png',
    ],
    notes: {
      head: 'Strawberry',
      heart: 'Vanilla',
      base: 'Sandalwood',
    },
    weight: '100 g',
    burnTime: '20 Hours',
    wax: 'Hand-poured Soy Wax',
    asin: 'B0GS1WZ3K8',
    amazonUrl:
      'https://www.amazon.in/AfterHuesTM-Strawberry-Hand-Poured-Vanilla-Sandalwood/dp/B0GS1WZ3K8?ref_=ast_sto_dp',
    needsDirectUrl: false,
    categories: ['GOUMAND & PRETTY', 'FOR HER'],
    tagline: 'Sweet sun-kissed strawberries folded into whipped vanilla cream and sandalwood.',
    description:
      'Soft, dreamy, and airy as a confectionary cloud. Juicy strawberries blend seamlessly with rich whipped vanilla, grounded by warm sandalwood to maintain balance and sophistication.',
    featured: true,
  },
  {
    id: 'velvet-rose-creme',
    slug: 'velvet-rose-creme',
    name: 'Velvet Rose Creme',
    displayName: 'Velvet Rose Crème',
    images: [
      '/images/products/velvet-rose-creme/02.png',
      '/images/products/velvet-rose-creme/01.png',
      '/images/products/velvet-rose-creme/03.png',
    ],
    notes: {
      head: 'Lavender',
      heart: 'Rose',
      base: 'Vanilla, Sandalwood',
    },
    weight: '100 g',
    burnTime: '20 Hours',
    wax: 'Hand-poured Soy Wax',
    asin: 'B0GS2CNCG3',
    amazonUrl:
      'https://www.amazon.in/AfterHuesTM-Hand-Poured-Lavender-Vanilla-Sandalwood/dp/B0GS2CNCG3?ref_=ast_sto_dp',
    needsDirectUrl: false,
    categories: ['FLORAL LUXURY', 'GOUMAND & PRETTY', 'FOR HER'],
    tagline: 'Calming lavender and rich velvet rose on creamy vanilla and sandalwood.',
    description:
      'An opulent floral gourmand. Lush rose petals mingle with gentle lavender on a plush bed of vanilla cream and sandalwood, lending an air of understated romance.',
  },
  {
    id: 'coffee',
    slug: 'coffee',
    name: 'Coffee',
    images: [
      '/images/products/coffee/01.png',
      '/images/products/coffee/02.png',
    ],
    notes: null,
    weight: '100 ml',
    burnTime: '20 Hours',
    wax: 'Hand-poured Soy Wax',
    asin: 'B0GS2895MN',
    amazonUrl:
      'https://www.amazon.in/AfterHuesTM-Coffee-Hand-Poured-Candle-100ml/dp/B0GS2895MN?ref_=ast_sto_dp',
    needsDirectUrl: false,
    categories: ['GOUMAND & PRETTY', 'MODERN MINIMAL', 'FOR HIM'],
    tagline: 'Rich roasted espresso aroma crafted for focus, warmth, and quiet moments.',
    description:
      'The timeless comfort of freshly roasted coffee in an amber jar. Clean, focused, and grounding, bringing a warm coffeehouse ambience to workspaces and morning rituals.',
    featured: true,
  },
  {
    id: 'lemongrass-breeze',
    slug: 'lemongrass-breeze',
    name: 'Lemongrass Breeze',
    images: [
      '/images/products/lemongrass-breeze/01.png',
      '/images/products/lemongrass-breeze/02.png',
    ],
    notes: null,
    weight: '100 ml',
    burnTime: '20 Hours',
    wax: 'Hand-poured Soy Wax',
    asin: 'B0GSB8Z6Q6',
    amazonUrl:
      'https://www.amazon.in/AfterHuesTM-Lemongrass-Breeze-Hand-Poured-Candle/dp/B0GSB8Z6Q6?ref_=ast_sto_dp',
    needsDirectUrl: false,
    categories: ['MODERN MINIMAL', 'FOR HIM'],
    tagline: 'Bright, citrus-kissed lemongrass delivering instant freshness and clarity.',
    description:
      'Crisp and clarifying. A pure, revitalizing lemongrass scent that cuts through fatigue, clears the atmosphere, and energizes modern minimalist spaces.',
  },
  {
    id: 'jasmine-whisper',
    slug: 'jasmine-whisper',
    name: 'Jasmine Whisper',
    images: [
      '/images/products/jasmine-whisper/01.png',
      '/images/products/jasmine-whisper/02.png',
    ],
    notes: null,
    weight: '100 ml',
    burnTime: '20 Hours',
    wax: 'Hand-poured Soy Wax',
    asin: 'B0GS2G2ZXX',
    amazonUrl:
      'https://www.amazon.in/AfterHuesTM-Whisper-Hand-Poured-Spa-Like-Fragrance/dp/B0GS2G2ZXX?ref_=ast_sto_dp',
    needsDirectUrl: false,
    categories: ['FLORAL LUXURY', 'FOR HER', 'SPIRITUAL & YOGA'],
    tagline: 'A delicate, spa-like floral serenity for meditation and mindful evenings.',
    description:
      'Gentle, soothing, and atmospheric. Jasmine Whisper disperses a calming floral veil that complements yoga practice, meditation, or quiet decompression after long days.',
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};
