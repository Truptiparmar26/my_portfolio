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

      try {
        await sendEmail({
          email: process.env.EMAIL_USER, // sending it to your own email
          replyTo: req.body.email,       // so hitting 'reply' sends it back to the user
          subject: emailSubject,
          message: emailText,
        });
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // We still return 201 because the message was saved in DB
      }

      res.status(201).json(document);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
