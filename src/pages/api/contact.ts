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
};

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
      FormValues = val;
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
        "Contact form (basiles.tk)",
        `
          <p>MESSAGE FROM CONTACT FORM (@ basiles.tk)</p>
          <p>FROM: ${FormValues.name}</p>
          <p>EMAIL: ${FormValues.email}</p>
          <p>MESSAGE:</p>
          <div style='white-space: pre-wrap'>
            ${FormValues.message}
          </div>
        `
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: true,
      });
    }

    // 200 response
    return res.json({
      status: true,
    });
  }
};
