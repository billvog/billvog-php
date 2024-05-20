import Sendgrid from "@sendgrid/mail";
import { TContactForm } from "@/types/Contact";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (SENDGRID_API_KEY) {
  Sendgrid.setApiKey(SENDGRID_API_KEY);
}

export async function POST(request: Request) {
  const body: TContactForm = await request.json();

  // Validation

  // !!!!!!!!!!!!!!
  // Escape values from body before using them.

  // Send email
  try {
    await Sendgrid.send({
      from: '"Vasilis\' Portfolio" <contact@billvog.com>',
      to: "vasilis@billvog.com",
      subject: "Message from contact form (@ billvog.com)",
      html: `
            <p>Master, you have a message from the contact from @ billvog.com</p>
            <p>From: ${body.name}</p>
            <p>Email: ${body.email}</p>
            <p>Message:</p><div style='white-space: pre-wrap'>${body.message}</div>
          `,
    });
  } catch (error) {
    console.error("Failed to send email", error);
    return new Response("not ok", { status: 500 });
  }

  return new Response("ok", { status: 200 });
}
