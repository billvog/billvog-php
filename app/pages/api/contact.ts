import type { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";
import sendEmail from "../../utils/sendEmail";

// Yup
const ContactValObject = yup.object().shape({
  message: yup.string().label("Message").min(50).max(5000).trim(),
  email: yup.string().email().label("Email").required().max(255).trim(),
  name: yup.string().label("Name").required().min(6).max(255).trim(),
});

type Response = {
  status: boolean;
  error?: {
    field: string;
    message: string;
  };
} | null;

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  if (req.method === "POST") {
    // Validate
    let FormValues: {
      name: string;
      email: string;
      message: string;
    } = req.body;

    try {
      const val = await ContactValObject.validate(FormValues);
      FormValues = val as any;
    } catch (error) {
      return res.json({
        status: false,
        error: {
          field: error.path,
          message: error.errors[0],
        },
      });
    }

    // Send email
    try {
      await sendEmail(
        "billvog.apps@gmail.com",
        "Message from contact form (@ billv.org)",
        `
          <p>Master, you have a message from the contact from @ billv.org</p>
          <p>From: ${FormValues.name}</p>
          <p>Email: ${FormValues.email}</p>
          <p>Message:</p><div style='white-space: pre-wrap'>${FormValues.message}</div>
        `
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: false,
      });
    }

    // 200 response
    return res.json({
      status: true,
    });
  } else {
    // Wrong method response
    res.status(405).json(null);
  }
};
