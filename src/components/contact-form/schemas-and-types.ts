import { z } from "zod";
import isAlpha from "validator/es/lib/isAlpha";

export const contactFormSchema = z.object({
  firstName: z.union([
    z.string()
      .min(1, { message: "First Name must have at least one character." })
      .max(50, { message: "First Name must have maximum 50 characters." }),
    z.string().refine(str => isAlpha(str, "en-US")),
    z.string().refine(str => isAlpha(str, "fr-FR")),
    z.string().refine(str => isAlpha(str, "es-ES")),
  ]),
  lastName: z.union([
    z.string()
      .min(1, { message: "Last Name must have at least one character." })
      .max(50, { message: "Last Name must have maximum 50 characters." }),
    z.string().refine(str => isAlpha(str, "en-US")),
    z.string().refine(str => isAlpha(str, "fr-FR")),
    z.string().refine(str => isAlpha(str, "es-ES")),]),
  email: z.string().email({ message: "Email is invalid." }),
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


