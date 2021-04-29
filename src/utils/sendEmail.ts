import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export default async (to: string, subject: string, html: string) => {
  console.log(process.env.EMAIL_API_KEY);

  let transporter: Mail;
  if (process.env.NODE_ENV !== "production") {
    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "x3wbn5yx6or5i3tm@ethereal.email",
        pass: "3UpB9BHvge7Q8DBRnk",
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
    from: '"Basiles PHP" <mail@basiles.tk>',
    to,
    subject,
    html,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
