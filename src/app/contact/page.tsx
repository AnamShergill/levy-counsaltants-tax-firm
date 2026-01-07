import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 bg-gray-50">
      {/* Full-width image container placeholder for map or banner */}
      <div className="w-full h-64 md:h-80 bg-gradient-to-r from-navy-100 to-gold-100 flex items-center justify-center mb-12">
        <div className="text-center">
          <div className="bg-navy-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
          <p className="text-navy-700 font-medium">Location Map or Banner</p>
        </div>
      </div>

      <Container size="md">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6 sm:p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-navy-900 mb-2">Contact Us</h1>
            <p className="text-gray-600">
              Have questions? Reach out to our team for expert tax advice.
            </p>
          </div>

          <div className="mt-8">
            <ContactForm />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-900">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-900">Email</h3>
                <p className="text-gray-600">info@taxfirm.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-900">Office</h3>
                <p className="text-gray-600">123 Tax Avenue, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}