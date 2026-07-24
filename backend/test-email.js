import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'truptiofficial.it@gmail.com',
    pass: 'flylutqwlhwjumja',
  },
});

async function test() {
  try {
    await transporter.verify();
    console.log("SUCCESS: SMTP connection verified!");
    
    await transporter.sendMail({
      from: 'truptiofficial.it@gmail.com',
      to: 'truptiofficial.it@gmail.com',
      subject: 'Test Email',
      text: 'This is a test email to verify Nodemailer is working.'
    });
    console.log("SUCCESS: Test email sent!");
  } catch (error) {
    console.error("ERROR:");
    console.error(error);
  }
}

test();
