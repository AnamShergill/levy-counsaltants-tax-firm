'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideUp } from '@/components/animations/SlideUp';

const testimonials = [
  {
    id: '1',
    clientName: 'John Smith',
    company: 'TechStart Inc.',
    content: 'Their tax expertise saved our company thousands of dollars. Professional, responsive, and thorough in their approach.',
    rating: 5
  },
  {
    id: '2',
    clientName: 'Sarah Johnson',
    company: 'Johnson & Associates',
    content: 'Outstanding service! They made the complex tax season stress-free and helped us identify new deductions.',
    rating: 5
  },
  {
    id: '3',
    clientName: 'Michael Brown',
    company: 'Brown Enterprises',
    content: 'The team provided strategic tax planning that significantly improved our financial position. Highly recommended!',
    rating: 5
  }
];

const clientLogos = [
  { id: '1', name: 'Client 1', logo: 'CL1' },
  { id: '2', name: 'Client 2', logo: 'CL2' },
  { id: '3', name: 'Client 3', logo: 'CL3' },
  { id: '4', name: 'Client 4', logo: 'CL4' },
  { id: '5', name: 'Client 5', logo: 'CL5' },
  { id: '6', name: 'Client 6', logo: 'CL6' }
];

const ClientsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <Container size="xl">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Happy <span className="text-gold-500">Clients</span>
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by businesses and individuals for exceptional tax services.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <SlideUp key={testimonial.id} delay={index * 0.1}>
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-gold-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-navy-900">{testimonial.clientName}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </SlideUp>
          ))}
        </div>

        {/* Client Logos */}
        <FadeIn>
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-navy-900 mb-8">Trusted by Industry Leaders</h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientLogos.map((client, index) => (
            <SlideUp key={client.id} delay={index * 0.05}>
              <div className="flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center w-full h-16 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="text-gray-500 font-semibold">{client.logo}</div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { ClientsSection };