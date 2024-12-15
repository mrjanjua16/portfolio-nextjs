import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

export default async function handler(req: any, res: any) {

  try {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const mailerSend = new MailerSend({
    apiKey: process.env.API_KEY || '',
  });

  const { senderEmail, message } = req.body;

  if (!senderEmail || !message) {
    return res
      .status(400)
      .json({ error: 'Both email and message are required.' });
  }

  const sentFrom = new Sender("MS_WshbQT@trial-3yxj6ljr51x4do2r.mlsender.net", "Portfolio Contact");

  const recipients = [new Recipient('imubashirahmad@gmail.com')];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(new Sender(senderEmail))
    .setSubject(`Portfolio Contact Form ${senderEmail}`)
    .setHtml(`
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${senderEmail}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `)
    .setText(`From: ${senderEmail}\n\nMessage:\n${message}`);

    const response = await mailerSend.email.send(emailParams);

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
