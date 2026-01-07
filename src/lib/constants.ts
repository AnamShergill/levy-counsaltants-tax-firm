// Color Palette
export const COLORS = {
  navy: {
    50: '#e6eeff',
    100: '#ccdfff',
    200: '#99bfff',
    300: '#669fff',
    400: '#337fff',
    500: '#0066ff',
    600: '#0052cc',
    700: '#003d99',
    800: '#002966',
    900: '#001433',
  },
  gold: {
    50: '#fff8e6',
    100: '#fff0cc',
    200: '#ffe099',
    300: '#ffd166',
    400: '#ffc133',
    500: '#ffb300',
    600: '#cc9000',
    700: '#996c00',
    800: '#664800',
    900: '#332400',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
};

// Typography
export const TYPOGRAPHY = {
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Navigation Items
export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Happy Clients', href: '/clients' },
  { name: 'Contact', href: '/contact' },
];

// Animation Durations
export const ANIMATION = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
  },
  ease: {
    easeOut: [0.25, 0.46, 0.45, 0.94],
    easeInOut: [0.455, 0.03, 0.515, 0.955],
  },
};