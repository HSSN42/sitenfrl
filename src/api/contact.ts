import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  const { name, email, company, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Required fields are missing' },
      { status: 400 }
    );
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'hub@neuraframelab.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ''}
Message:
${message}
      `.trim(),
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 