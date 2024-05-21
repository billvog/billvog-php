import Sendgrid from "@sendgrid/mail";
import sanitizeHtml from "sanitize-html";
import { ContactFormErrors, TContactForm } from "@/types/Contact";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (SENDGRID_API_KEY) {
  Sendgrid.setApiKey(SENDGRID_API_KEY);
}

export async function POST(request: Request) {
  let body: TContactForm = await request.json();

  // Sanitize input
  for (const [key, value] of Object.entries(body)) {
    body[key as keyof TContactForm] = sanitizeHtml(value, {
      allowedTags: ["b", "i", "em", "strong", "a"],
      allowedAttributes: {
        a: ["href"],
      },
      allowedIframeHostnames: ["www.youtube.com"],
    });
  }

  // Validation.
  const [hasError, errors] = validateContactForm(body);
  if (hasError) {
    return new Response(JSON.stringify({ errors }), { status: 400 });
  }

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

// Shortcut type for form errors.
type FormErrors = ContactFormErrors<TContactForm>;

// Function to validate contact form and return any errors.
function validateContactForm(formValues: TContactForm): [boolean, FormErrors] {
  let hasError = false;
  let errors: FormErrors = {};

  // Following DRY as if some old asian master have taught me that.
  function addError(field: keyof TContactForm, error: string) {
    hasError = true;
    errors[field] = error;
  }

  // Validate name
  if (!formValues.name) {
    addError("name", "Name is a required field");
  }

  // Validate email
  if (!formValues.email) {
    addError("email", "Email is a required field");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
    addError("email", "Invalid email address");
  }

  // Validate message
  if (!formValues.message) {
    addError("message", "Message is a required field");
  }

  return [hasError, errors];
}
