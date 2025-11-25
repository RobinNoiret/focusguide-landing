import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <html>
    <head>
      <style>
        {`
          body {
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
        `}
      </style>
    </head>
    <body>
      <div className="email-container">
        <div className="email-header">
          <img src="/public/logo/logo.png" alt="FocusGuide Logo" />
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
);
