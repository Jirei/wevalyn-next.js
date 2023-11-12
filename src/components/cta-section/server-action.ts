"use server";
import prisma from "@/prisma/client";
import { ContactFormData, contactFormSchema } from "./schemas-and-types";


export async function handleContactFormSubmit(data: ContactFormData) {
  await wait(5)
  try {
    contactFormSchema.parse(data);
    await prisma.message.create({
      data: {
        senderFirstName: data.firstName,
        senderLastName: data.lastName,
        senderEmail: data.email,
        message: data.message
      }
    });
  } catch {
  }
}


export async function wait(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}