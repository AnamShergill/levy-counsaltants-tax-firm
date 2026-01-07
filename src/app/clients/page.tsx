import { Container } from '@/components/ui/Container';
import { ClientsSection } from '@/components/sections/ClientsSection';

export default function ClientsPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Happy <span className="text-gold-500">Clients</span>
          </h1>
          <p className="text-lg text-gray-600">
            Trusted by businesses and individuals for exceptional tax services.
          </p>
        </div>
      </Container>
      <ClientsSection />
    </div>
  );
}