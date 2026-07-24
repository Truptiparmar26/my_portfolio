import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'truptiofficial.it@gmail.com',
      pass: 'flylutqwlhwjumja',
    },
  });

  // Define the email options
  const mailOptions = {
    from: `"Portfolio Contact" <truptiofficial.it@gmail.com>`,
    to: options.email,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.message,
  };

  // Actually send the email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
