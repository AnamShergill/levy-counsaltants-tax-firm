import { Container } from '@/components/ui/Container';
import { ServicesSection } from '@/components/sections/ServicesSection';

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Our <span className="text-gold-500">Tax Services</span>
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive tax solutions tailored to your specific needs and financial situation.
          </p>
        </div>
      </Container>
      <ServicesSection />
    </div>
  );
}