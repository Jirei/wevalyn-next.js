import { z } from 'zod';


export const contactFormSchema = z.object({
  firstName: z.string().min(2).max(30),
  lastName: z.string().min(2).max(30),
  email: z.string().email(),
});

export type ContactFormFields = z.infer<typeof contactFormSchema>;

export async function handleContactFormSubmit(data: ContactFormFields) {
  'use server';
  console.log(data);
}