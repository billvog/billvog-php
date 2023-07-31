import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export default async (to: string, subject: string, html: string) => {
  let transporter: Mail;
  if (process.env.NODE_ENV !== "production") {
    // nodemailer.createTestAccount(console.log);

    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "zjo7biqjyff6izyo@ethereal.email",
        pass: "49cBWenvYET1CfKSgA",
      },
    });
  } else {
    transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey",
        pass: process.env.EMAIL_API_KEY,
      },
    });
  }

  let info = await transporter.sendMail({
    from: '"billv.org Portfolio" <hello@billv.org>',
    to,
    subject,
    html,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
