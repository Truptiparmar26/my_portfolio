import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // use STARTTLS instead of SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 10000, // 10 seconds timeout
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });

  // Define the email options
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: options.email,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.message,
  };

  // Actually send the email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
