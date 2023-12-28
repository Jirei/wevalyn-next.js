import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name must have at least 1 character." })
    .max(50, { message: "First Name must have maximum 50 characters." }),
  lastName: z
    .string()
    .min(1, { message: "Last Name must have at least 1 character." })
    .max(50, { message: "Last Name must have maximum 50 characters." }),
  email: z.string().email(),
  message: z
    .string()
    .min(250, { message: "Message must have at least 250 characters." })
    .max(2000, { message: "Message must have maximum 2000 characters." }),
  captchaToken: z.string()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type FormResponse = {
  message: string;
  hasError: true | null;
};


