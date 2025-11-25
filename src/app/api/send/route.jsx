import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

const emailHtml = `
  <html>
    <head>
      <style>
          .body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .email-header {
            background-color: #2c3e50;
            color: #ffffff;
            padding: 20px;
            text-align: center;
          }
          .email-header img {
            max-width: 150px;
            margin-bottom: 10px;
          }
          .email-body {
            padding: 20px;
            color: #333333;
            line-height: 1.6;
          }
          .email-footer {
            background-color: #f8f8f8;
            color: #888888;
            text-align: center;
            padding: 15px;
            font-size: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div className="email-container">
        <div className="email-header">
          <img src="https://focusguide-landing.vercel.app/logo/FocusGuide.svg" alt="FocusGuide Logo" />
          <h1>Welcome to FocusGuide!</h1>
        </div>
        <div className="email-body">
          <p>Hi {firstName},</p>
          <p>
            Thank you for joining FocusGuide! We're thrilled to have you with us.
          </p>
          <p>
            Our mission is to help you stay focused and achieve your goals. If you
            have any questions, feel free to reach out to our support team.
          </p>
        </div>
        <div className="email-footer">
          <p>© 2025 FocusGuide. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
`;

    const { data, error } = await resend.emails.send({
      from: 'Focus Guide <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to FocusGuide!',
      html: emailHtml,
    });

    if (error) {
      console.error("Resend Error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
