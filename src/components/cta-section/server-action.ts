"use server";

import { ContactFormData } from "./contact";
import { contactFormSchema } from "@/server-actions/contact-form-submit";

export async function handleContactFormSubmit(data: ContactFormData) {
  contactFormSchema.parse(data);
  console.log({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
  });
}


export async function wait(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}