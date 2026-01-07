'use client';

import React from 'react';
import Link from 'next/link';
import Image from "next/image"
import { Container } from '@/components/ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks = [
    { name: 'Facebook', url: '#', icon: 'F' },
    { name: 'Twitter', url: '#', icon: 'T' },
    { name: 'LinkedIn', url: '#', icon: 'L' },
    { name: 'Instagram', url: '#', icon: 'I' },
  ];

  // Quick links
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Happy Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ];

  // Services links
  const servicesLinks = [
    { name: 'Tax Preparation', href: '/services' },
    { name: 'Tax Planning', href: '/services' },
    { name: 'Business Tax', href: '/services' },
    { name: 'Audit Support', href: '/services' },
    { name: 'Estate Planning', href: '/services' },
    { name: 'Tax Resolution', href: '/services' },
  ];

  return (
    <footer className="bg-navy-900 text-white py-12">
      <Container size="xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Firm Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white">
      <Image
        src="/images/logo.png"   // same logo file
        alt="Levy Consultants Logo"
        width={50}
        height={50}
        className="object-contain"
      />
    </div>
              <span className="text-white font-bold text-xl">Levy Counsultants</span>
            </div>
            <p className="text-gray-300">
              Professional tax consulting services for individuals and businesses.
              Expert guidance for your financial success.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 Tax Avenue, Financial District, NY 10001
              </p>
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (555) 123-4567
              </p>
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@taxfirm.com
              </p>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-navy-700 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Levy Consultants. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };