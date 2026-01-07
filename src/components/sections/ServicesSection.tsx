'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideUp } from '@/components/animations/SlideUp';

const services = [
  {
    id: '1',
    title: 'Tax Filing',
    description: 'Professional preparation of individual and business tax returns with attention to detail and accuracy.',
    icon: '📋'
  },
  {
    id: '2',
    title: 'Corporate Tax',
    description: 'Comprehensive tax solutions for corporations, partnerships, and LLCs.',
    icon: '🏢'
  },
  {
    id: '3',
    title: 'GST/VAT',
    description: 'Expert guidance on Goods and Services Tax and Value Added Tax compliance and optimization.',
    icon: '💰'
  },
  {
    id: '4',
    title: 'Compliance',
    description: 'Ensuring your business meets all regulatory requirements and avoids costly penalties.',
    icon: '✅'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container size="xl">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Our <span className="text-gold-500">Tax Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive tax solutions tailored to your specific needs and financial situation.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <SlideUp key={service.id} delay={index * 0.1}>
              <Card className="h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </CardContent>
              </Card>
            </SlideUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { ServicesSection };