
import { Product } from './types';

export const BRAND_NAME = "Lahore Garments";
export const BRAND_PRIMARY = "#121212"; // Deep Charcoal
export const BRAND_SECONDARY = "#1A1F2C"; // Deep Navy
export const BRAND_ACCENT = "#C5A059"; // Muted Luxury Gold
export const BRAND_BG = "#FDFCFB"; // Soft Ivory

export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 'lg-v-001',
    name: 'Imperial Sherwani Noir',
    category: 'Heritage Wear',
    price: 85000,
    description: 'A masterpiece of artisanal craftsmanship featuring hand-spun silk and intricate zardozi embroidery. Tailored to perfection for the contemporary patriarch.',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
    imageUrl: 'https://images.unsplash.com/photo-1617130608976-0a0050849310?q=80&w=800&auto=format&fit=crop',
    colors: ['Obsidian', 'Royal Navy', 'Emerald'],
    sizes: ['40', '42', '44', '46'],
    isNewArrival: true,
    isTrending: true,
    status: 'published'
  },
  {
    id: 'lg-v-002',
    name: 'Silk Linen Kurta',
    category: 'Occasion Essentials',
    price: 12500,
    description: 'Breathable luxury. Hand-loomed Italian linen blended with raw silk for a subtle sheen and unparalleled drape.',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/RobotExpressive.glb',
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop',
    colors: ['Sandstone', 'Ivory', 'Slate'],
    sizes: ['S', 'M', 'L', 'XL'],
    isNewArrival: false,
    isTrending: true,
    status: 'published'
  }
];
