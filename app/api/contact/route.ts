import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In production, you would:
    // 1. Send email via SendGrid, Resend, or similar
    // 2. Save to a database
    // 3. Send to a CRM
    // For now, we'll just log and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      interest,
      message,
      timestamp: new Date().toISOString()
    });

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'hello@thepantry.co.uk',
    //   subject: `New contact form submission from ${name}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p>...`
    // });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

