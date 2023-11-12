import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(2).max(30),
  lastName: z.string().min(2).max(30),
  email: z.string().email(),
  message: z.string().max(2000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;