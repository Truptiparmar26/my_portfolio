import Message from '../models/Message.js';
import crudFactory from '../utils/crudFactory.js';
import sendEmail from '../utils/sendEmail.js';

export const messageController = {
  ...crudFactory(Message),
  createOne: async (req, res) => {
    try {
      const document = await Message.create(req.body);

      // Send email notification to you
      const emailSubject = `New Portfolio Contact: ${req.body.subject || 'No Subject'}`;
      const emailText = `You have received a new message from your portfolio contact form.

Name: ${req.body.name}
Email: ${req.body.email}
Subject: ${req.body.subject}

Message:
${req.body.message}`;

      // Email sending is now handled securely by the frontend directly via Web3Forms
      // This bypasses Render's outbound SMTP blocking and Cloudflare's backend blocking


      res.status(201).json(document);
    } catch (error) {
      console.error('Email/Message creation error:', error);
      res.status(500).json({ message: 'Failed to send message. Please try again later.', error: error.message });
    }
  },
};
