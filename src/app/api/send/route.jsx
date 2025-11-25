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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenue chez FocusGuide !</title>
</head>
<body style="font-family: 'Inter', Arial, sans-serif; background-color: #262626; margin: 0; padding: 0;">

    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #262626; padding: 20px 0;">
        <tr>
            <td align="center">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; background: #EDEAE9; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);">
                    
                    <tr>
                        <td align="center" style="background-color: #262626; padding: 30px 20px;">
                            <img src="https://focusguide-landing.vercel.app/logo/logo_email.png" 
                                 alt="FocusGuide Logo" 
                                 width="200" 
                                 style="display: block; max-width: 200px; height: auto;">
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 40px 30px 20px 30px; color: #262626; line-height: 1.6; font-family: 'Inter', Arial, sans-serif;">
                            
                            <h1 style="color: #262626; font-size: 28px; margin-top: 0; margin-bottom: 25px; font-family: 'BNReconGrotesk', 'Inter', Arial, sans-serif; font-weight: 700;">
                                Bienvenue, {{firstName}} !
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
