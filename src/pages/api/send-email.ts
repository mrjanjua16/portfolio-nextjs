import { Resend } from "resend";

export default async function handler(req: any, res: any) {

  try {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { senderEmail, message } = req.body;

  if (!senderEmail || !message) {
    return res
      .status(400)
      .json({ error: 'Both email and message are required.' });
  }

  const resend = new Resend(process.env.RESEND_API)

  const response = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'imubashirahmad@gmail.com',
    subject: `Contact Form from ${senderEmail}`,
    html: message
  })

    res.status(200).json({ message: response });
  } catch (error) {
    console.error('Email error: ', error);
    res
      .status(500)
      .json({
        error: 'Failed to send email. Please try again later.',
        message: error,
      });
  }
}
