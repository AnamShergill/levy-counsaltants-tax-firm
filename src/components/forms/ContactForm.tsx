'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues } from '@/lib/validations';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // ✅ Call the server API route instead of server-only Supabase
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || 'Failed to submit form');
      }

      setSubmitSuccess(true);
      reset();
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your message has been sent successfully. We'll get back to you shortly.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitSuccess(false);
            reset();
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          id="name"
          placeholder="John Doe"
          error={errors.name?.message}
          required
          {...register('name')}
        />
        <Input
          label="Email Address"
          id="email"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
          required
          {...register('email')}
        />
      </div>

      <Input
        label="Phone Number (Optional)"
        id="phone"
        placeholder="+1 (555) 123-4567"
        error={errors.phone?.message}
        {...register('phone')}
      />

      <Textarea
        label="Message"
        id="message"
        placeholder="How can we help you?"
        rows={5}
        error={errors.message?.message}
        required
        {...register('message')}
      />

      {submitError && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md">{submitError}</div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full sm:w-auto"
        isLoading={isSubmitting}
        disabled={isSubmitting}
      >
        Send Message
      </Button>
    </form>
  );
};

export { ContactForm };
