import { Resend } from 'resend';
import { neon } from '@neondatabase/serverless';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, firstName, profession } = body;

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!firstName) {
      return Response.json({ error: 'First name is required' }, { status: 400 });
    }

    if (!profession) {
      return Response.json({ error: 'Profession is required' }, { status: 400 });
    }

    // Connect to Neon database
    const sql = neon(process.env.DATABASE_URL);

    // Insert user data into database before sending email
    try {
      await sql`
        INSERT INTO waitlist (email, first_name, profession)
        VALUES (${email}, ${firstName}, ${profession})
        ON CONFLICT (email)
        DO UPDATE SET first_name = ${firstName}, profession = ${profession}
      `;
      console.log('User data saved to database:', { email, firstName, profession });
    } catch (dbError) {
      console.error('Database error:', dbError);
      return Response.json({ error: 'Failed to save user data' }, { status: 500 });
    }

const emailHtml = `
  <html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenue chez FocusGuide !</title>
</head>
<body style="font-family: 'Inter', Arial, sans-serif; background-color: #ffffff; margin: 0; padding: 0;">

    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f5; padding: 40px 0;">
        <tr>
            <td align="center">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; background: #EDEAE9; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">

                    <tr>
                        <td align="center" style="background-color: #262626; padding: 0;">
                            <img src="https://focusguide.fr/logo_email.png"
                                 alt="FocusGuide Logo"
                                 width="600"
                                 style="display: block; width: 100%; max-width: 600px; height: auto;">
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 40px 30px 20px 30px; color: #262626; line-height: 1.6; font-family: 'Inter', Arial, sans-serif;">
                            
                            <h1 style="color: #262626; font-size: 28px; margin-top: 0; margin-bottom: 25px; font-family: 'BNReconGrotesk', 'Inter', Arial, sans-serif; font-weight: 700;">
                                Bienvenue ${firstName} !
                            </h1>

                            <p style="margin-bottom: 20px; font-size: 16px;">
                                L'équipe FocusGuide est ravie de vous compter parmi nous. Merci pour l'intérêt que vous portez au projet.
                            </p>
                            <p style="margin-bottom: 25px; font-size: 16px;">
                                L'outils étant en cours de développement, nous vous tiendrons informé·e·s des prochaines étapes. 
                            </p>

                            <p style="font-size: 14px; color: #555555; margin-top: 30px;">
                                Si vous avez la moindre question ou suggestion, n'hésitez pas à nous contacter.
                            </p>

                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="background-color: #EEEEEE; padding: 15px 30px; color: #888888; font-size: 12px; border-top: 1px solid #DDDDDD;">
                            <p style="margin: 0;">
                                Cet email est envoyé suite à votre inscription à FocusGuide.
                            </p>
                            <p style="margin: 5px 0 0 0;">
                                &copy; 2025 FocusGuide. Tous droits réservés.
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

    const { data, error } = await resend.emails.send({
      from: 'FocusGuide <hello@focusguide.fr>',
      to: [email],
      subject: 'Bienvenue chez FocusGuide !',
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
