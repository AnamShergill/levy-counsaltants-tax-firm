import { createClient } from '@supabase/supabase-js';

// Supabase client configuration
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env.local');
}
// Create the Supabase client
export const supabaseServer = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false },
});

/**
 * Contact form submission function
 */
export const submitContactForm = async (data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  const { name, email, phone, message } = data;

  const { data: submission, error } = await supabaseServer
    .from('contact_submissions')
    .insert([
      {
        name,
        email,
        phone: phone || null,
        message,
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return submission;
};

/**
 * Get services from Supabase
 */
export const getServices = async () => {
  const { data, error } = await supabaseServer
    .from('services')
    .select('*')
    .order('order_num', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

/**
 * Get testimonials from Supabase
 */
export const getTestimonials = async () => {
  const { data, error } = await supabaseServer
    .from('testimonials')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

/**
 * Get team members from Supabase
 */
export const getTeamMembers = async () => {
  const { data, error } = await supabaseServer
    .from('team')
    .select('*')
    .order('order', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};