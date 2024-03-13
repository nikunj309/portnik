import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const formData = req.body;
      
      // Send email with form data
      await sendEmail(formData);

      // Send a response indicating successful form submission
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // Handle other HTTP methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

// Function to send email
async function sendEmail(formData: { name: string; email: string; subject: string; message: string }) {
  // Create transporter using SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.PASSWORD
    }
  });

  // Configure email message
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECIEVER_EMAIL,
    subject:`${formData.subject}`,
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `
  };

  // Send email
  await transporter.sendMail(mailOptions);
}