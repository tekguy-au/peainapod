import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, email, message } = req.body
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

  const transporter = nodemailer.createTransport({
    host: 'mail-au.smtp2go.com',
    port: 2525,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: 'web-contact@peainapod.au',
    to: 'info@peainapod.au',
    replyTo: email,
    subject: `Website enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${message.replace(/\n/g, '<br/>')}</p>`,
  })

  res.status(200).json({ ok: true })
}
