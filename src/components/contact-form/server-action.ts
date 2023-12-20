"use server";
import prisma from "@/prisma/client";
import { ContactFormData, type FormResponse, contactFormSchema } from "./schemas-and-types";
import { serverEnv } from "@/config/server-config";
import { captchaActions } from "@/lib/client";

export async function handleContactFormSubmit(data: ContactFormData): Promise<FormResponse> {
  try {
    const validatedData = contactFormSchema.parse(data);
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          response: validatedData.captchaToken,
          secret: serverEnv.RECAPTCHA_SECRET,
          action: captchaActions.contact
        })
      });
    const parsedResponse: { success: boolean; } = await response.json();
    if (!parsedResponse.success) return {
      error: true, message: "Sorry but our security check found the activity unusual. Please try again later."
    };
    await prisma.message.create({
      data: {
        senderFirstName: data.firstName,
        senderLastName: data.lastName,
        senderEmail: data.email,
        message: data.message,
      },
    });
    return { message: "The message was sent successfully. Thank you for your message.", error: null };
  } catch (e) {
    console.error(e);
    return { message: "Something went wrong. Please try again later.", error: true };
  }
}
