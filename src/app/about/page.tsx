import { Container } from '@/components/ui/Container';
import Image from 'next/image';


export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            About <span className="text-gold-500">Levy Counsultants</span>
          </h1>
          <p className="text-lg text-gray-600">
            Your trusted partner for professional tax consulting services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, TaxFirm has been providing exceptional tax consulting services to individuals and businesses for over a decade. Our team of certified tax professionals is dedicated to helping you navigate the complex world of taxation.
            </p>
            <p className="text-gray-600 mb-4">
              We believe in building long-term relationships with our clients based on trust, transparency, and results. Our approach combines deep technical knowledge with personalized service to deliver solutions that meet your unique needs.
            </p>
            <p className="text-gray-600">
              Our mission is to help you minimize tax liability, maximize deductions, and achieve your financial goals through strategic tax planning and expert guidance.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-navy-100 to-gold-100 flex items-center justify-center overflow-hidden shadow-xl">
              {/* Placeholder for about image */}
  <Image
  src="/images/about.jpg" // ✅ Now points to public/images/about.jpg
  alt="Expert Tax Team"
  fill
  className="object-cover rounded-2xl"
/>

              <div className="bg-navy-200 border-2 border-dashed rounded-xl w-16 h-16" />
              <div className="absolute inset-0 flex items-center justify-center">
                
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
  <h2 className="text-2xl font-bold text-navy-900 text-center mb-12">
    Our Core Values
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Integrity */}
    <div className="group text-center p-8 rounded-2xl bg-sky-50 shadow-lg shadow-navy-900/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-navy-700 hover:shadow-2xl">
      <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:bg-gold-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy-700 transition-colors duration-500 group-hover:text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>

      <h3 className="text-lg font-semibold text-navy-900 mb-2 transition-colors duration-500 group-hover:text-white">
        Integrity
      </h3>

      <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-200">
        We maintain the highest ethical standards in all our professional dealings.
      </p>
    </div>

    {/* Excellence */}
    <div className="group text-center p-8 rounded-2xl bg-sky-50 shadow-md shadow-navy-900/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-navy-700 hover:shadow-2xl">
      <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:bg-gold-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy-700 transition-colors duration-500 group-hover:text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      <h3 className="text-lg font-semibold text-navy-900 mb-2 transition-colors duration-500 group-hover:text-white">
        Excellence
      </h3>

      <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-200">
        We are committed to delivering the highest quality tax services.
      </p>
    </div>

    {/* Client Focus */}
    <div className="group text-center p-8 rounded-2xl bg-sky-50 shadow-md shadow-navy-900/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-navy-700 hover:shadow-2xl">
      <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:bg-gold-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy-700 transition-colors duration-500 group-hover:text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      <h3 className="text-lg font-semibold text-navy-900 mb-2 transition-colors duration-500 group-hover:text-white">
        Client Focus
      </h3>

      <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-200">
        We prioritize our clients’ needs and work to achieve their financial goals.
      </p>
    </div>

  </div>
</div>

      </Container>
    </div>
  );
}