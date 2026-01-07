import { Hero } from '@/components/sections/Hero';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ClientsSection } from '@/components/sections/ClientsSection';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <ClientsSection />
    </div>
  );
}