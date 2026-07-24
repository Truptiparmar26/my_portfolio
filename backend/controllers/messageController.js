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

      // Await the email send so we can log errors, but don't fail the whole request if it fails
      try {
        await sendEmail({
          email: 'truptiofficial.it@gmail.com',
          replyTo: req.body.email,
          subject: emailSubject,
          message: emailText,
        });
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError.message);
        // We do NOT throw here because we still want to return 201 so the user's message is saved.
      }

      res.status(201).json(document);
    } catch (error) {
      console.error('Email/Message creation error:', error);
      res.status(500).json({ message: 'Failed to send message. Please try again later.', error: error.message });
    }
  },
};
