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

      // Send email asynchronously in the background so it doesn't hang the UI
      sendEmail({
        email: process.env.EMAIL_USER,
        replyTo: req.body.email,
        subject: emailSubject,
        message: emailText,
      }).catch(emailError => {
        console.error('Background email failed to send:', emailError);
      });

      res.status(201).json(document);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
