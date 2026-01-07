'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideUp } from '@/components/animations/SlideUp';
import Image from 'next/image';
import heroImg from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-navy-50 to-white pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
      <Container size="xl">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
              Expert Tax Solutions for <span className="text-gold-500">Your Success</span>
            </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg sm:text-xl text-gray-600 max-w-lg">
                Professional tax consulting services tailored to your unique financial needs.
                Our certified experts help you navigate complex tax regulations and optimize your tax strategy.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  
                  className="bg-gold-500 hover:bg-gold-600 text-navy-900 border-none hover:scale-105 transition-transform duration-300"
                >
                  <a href="/contact">Schedule Consultation</a>
                </Button>
                <Button variant="outline" size="lg" >
                  <a href="/services">Our Services</a>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <SlideUp delay={0.2}>
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-navy-100 to-gold-100 flex items-center justify-center overflow-hidden shadow-xl">
                {/* Placeholder for hero image */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
    src={heroImg}
    alt="Trusted Tax Experts"
    className="rounded-xl object-cover"
    fill // makes the image fill the parent container
    sizes="(max-width: 768px) 100vw, 50vw"
  />
                </div>
                
              </div>
            </SlideUp>

            {/* Floating elements for visual interest */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gold-200 opacity-70"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-navy-200 opacity-50"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export { Hero };