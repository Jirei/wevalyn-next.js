"use server";
import prisma from "@/prisma/client";
import { Prisma } from "@prisma/client";
import { ContactFormData, type FormResponse, contactFormSchema } from "./schemas-and-types";
import { captchaActions } from "@/lib/common";
import { isPrismaTransientError, checkCaptchaClientTokenOnServer, logServerError } from "@/lib/server";
import { addTimeoutToFunction } from "add-timeout-to-function";
import { addRetriesToFunction } from "add-retries-to-function";
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';
import { headers } from "next/headers";

export async function handleContactFormSubmit(data: ContactFormData): Promise<FormResponse> {
  try {
    const ip = headers().get('x-forwarded-for');
    console.log(ip);
    const canSendForm = await canUserSendForm(ip);
    if (!canSendForm) {
      return { message: "You reached your message limit. Please try again later.", hasError: true };
    }
    const validatedData = contactFormSchema.parse(data);
    const { isValid, message } = await checkCaptchaClientTokenOnServer({ token: validatedData.captchaToken, action: captchaActions.contact });
    if (!isValid) {
      return { message, hasError: true };
    }
    await createMessageInDB({
      senderFirstName: validatedData.firstName,
      senderLastName: validatedData.lastName,
      senderEmail: validatedData.email,
      message: validatedData.message,
    });
    return { message: "The message was sent successfully. Thank you for your message.", hasError: null };
  } catch (e) {
    logServerError(e);
    return { message: "Something went wrong. Please try again later.", hasError: true };
  }
}

const _fnWithTimeout = addTimeoutToFunction({ fn: _rawCreateMessageInDB, timeout: 5000 });
const _fnWithTimeoutAndRetries = addRetriesToFunction({ fn: _fnWithTimeout, loggingFn: logServerError, shouldStopTrying: e => isPrismaTransientError(e) });
const createMessageInDB = _fnWithTimeoutAndRetries;

async function _rawCreateMessageInDB(messageData: Prisma.MessageCreateInput) {
  return await prisma.message.create({ data: messageData });
}

const _canUserSendFormWithTimeout = addTimeoutToFunction({ fn: _canUserSendForm, timeout: 5000 });
const _canUserSendFormWithTimeoutAndRetries = addRetriesToFunction({ fn: _canUserSendFormWithTimeout, loggingFn: logServerError });
const canUserSendForm = _canUserSendFormWithTimeoutAndRetries;

async function _canUserSendForm(ip: string | null): Promise<boolean> {
  if (process.env.NEXT_PUBLIC_PLAYWRIGHT_MODE === 'on') return true;
  if (!ip) return false;
  const { success } = await contactRatelimit.limit(
    ip
  );
  return success ? true : false;
}

const contactRatelimit = new Ratelimit({
  redis: kv,
  // 2 contact form submits from the same IP in 10 minutes max
  limiter: Ratelimit.slidingWindow(2, '600s'),
  prefix: "ratelimit:contact",
  timeout: 5000
});