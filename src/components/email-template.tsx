import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <html>
    <body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', margin: 0, padding: 0 }}>
      <div style={{ maxWidth: '600px', margin: '20px auto', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ backgroundColor: '#2c3e50', color: '#ffffff', padding: '20px', textAlign: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/public/logo/logo.png" alt="FocusGuide Logo" style={{ maxWidth: '150px', marginBottom: '10px' }} />
          <h1>Welcome to FocusGuide!</h1>
        </div>
        <div style={{ padding: '20px', color: '#333333', lineHeight: '1.6' }}>
          <p>Hi {firstName},</p>
          <p>
            Thank you for joining FocusGuide! We&apos;re thrilled to have you with us.
          </p>
          <p>
            Our mission is to help you stay focused and achieve your goals. If you
            have any questions, feel free to reach out to our support team.
          </p>
        </div>
        <div style={{ backgroundColor: '#f8f8f8', color: '#888888', textAlign: 'center', padding: '15px', fontSize: '12px' }}>
          <p>© 2025 FocusGuide. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
);
