"use server";
import prisma from "@/prisma/client";
import { Prisma } from "@prisma/client";
import { ContactFormData, type FormResponse, contactFormSchema } from "./schemas-and-types";
import { captchaActions, logError } from "@/lib/common";
import { isPrismaTransientError, checkCaptchaClientTokenOnServer } from "@/lib/server";
import { addTimeoutToFunction } from "add-timeout-to-function";
import { addRetriesToFunction } from "add-retries-to-function";

export async function handleContactFormSubmit(data: ContactFormData): Promise<FormResponse> {
  try {
    const validatedData = contactFormSchema.parse(data);
    if (process.env.NODE_ENV !== "test") {
      const { isValid, message } = await checkCaptchaClientTokenOnServer({ token: validatedData.captchaToken, action: captchaActions.contact });
      if (isValid) {
        return { message, hasError: true };
      }
    }
    await createMessageInDB({
      senderFirstName: validatedData.firstName,
      senderLastName: validatedData.lastName,
      senderEmail: validatedData.email,
      message: validatedData.message,
    });
    return { message: "The message was sent successfully. Thank you for your message.", hasError: null };
  } catch (e) {
    logError(e);
    return { message: "Something went wrong. Please try again later.", hasError: true };
  }
}

const fnWithTimeout = addTimeoutToFunction({ fn: _rawCreateMessageInDB, timeout: 5000 });
const fnWithTimeoutAndRetries = addRetriesToFunction({ fn: fnWithTimeout, loggingFn: logError, shouldStopTrying: e => isPrismaTransientError(e) });
const createMessageInDB = fnWithTimeoutAndRetries;

async function _rawCreateMessageInDB(messageData: Prisma.MessageCreateInput) {
  return await prisma.message.create({ data: messageData });
}

