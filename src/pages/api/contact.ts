import type { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";

// Yup
const ContactValObject = yup.object().shape({
  message: yup.string().label("Message").min(50).max(5000).trim(),
  email: yup.string().email().label("Email").required().max(255).trim(),
  name: yup.string().label("Name").required().min(6).max(255).trim(),
});

type Response = {
  status: boolean;
  message?: string;
  error?: {
    field: string;
    message: string;
  };
};

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  if (req.method === "POST") {
    let FormValues: any = req.body;
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

    console.log(FormValues);
    return res.json({
      status: true,
      message: "Message sent successfuly, I'll answear as soon as I can!",
    });
  }
};
