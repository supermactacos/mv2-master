import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY || '',
      url: 'https://api.mailgun.net'
    });

    const data = await mg.messages.create(process.env.MAILGUN_DOMAIN || "", {
      from: `${name} <${email}>`,
      to: process.env.CONTACT_EMAIL_RECIPIENT,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
} 