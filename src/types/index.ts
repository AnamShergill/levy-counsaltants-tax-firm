// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  order: number;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  clientName: string;
  company?: string;
  content: string;
  rating?: number;
  date?: string;
  featured?: boolean;
}

// Team Member Types
export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio?: string;
  image?: string;
  order: number;
}

// Client Logo Types
export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
  url?: string;
  order: number;
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
}