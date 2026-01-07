import { z } from 'zod';

/**
 * Validation schemas for the tax consulting firm website
 */

// Contact Form Validation Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(100, { message: 'Name must be less than 100 characters' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' }),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\+]?[1-9][\d]{0,15}$/.test(val.replace(/[\s\-\(\)]/g, '')),
      { message: 'Please enter a valid phone number' }
    ),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(1000, { message: 'Message must be less than 1000 characters' }),
});

// Export the inferred type for use in components
export type ContactFormValues = z.infer<typeof contactFormSchema>;