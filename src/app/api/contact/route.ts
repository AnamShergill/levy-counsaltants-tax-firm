import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import { submitContactForm } from '@/lib/supabaseServer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    const submission = await submitContactForm(validatedData);

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      id: submission.id,
    });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json({
        success: false,
        message: 'Validation failed',
        errors: error.flatten().fieldErrors,
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      message: error.message || 'Internal server error',
    }, { status: 500 });
  }
}
