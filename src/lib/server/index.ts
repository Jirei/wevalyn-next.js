import "server-only";
import { serverEnv } from "@/config/server-config";
import { CaptchaAction, WrappingError } from "@/lib/common";
import { z } from "zod";
import { captchaActions } from "@/lib/common";
import { addRetriesToFunction } from "add-retries-to-function";


export function logServerError(error: unknown) {
  console.error(error);
}

export async function checkCaptchaClientTokenOnServer({ token, action }: { token: string, action: CaptchaAction; }) {
  if (process.env.NEXT_PUBLIC_PLAYWRIGHT_MODE === "on") return { isValid: true } as const;

  const response = await fetchWithTwoRetriesOnTimeout("https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        response: token,
        secret: serverEnv.RECAPTCHA_SECRET,
        action
      }),
      signal: AbortSignal.timeout(5000)
    });
  const parsedResponse: GrecaptchaServerVerificationAPIResponseJSON = await response.json();
  if (!parsedResponse.success || (parsedResponse.score <= 0.5 && process.env.NEXT_PUBLIC_PLAYWRIGHT_MODE !== 'on') || parsedResponse.action !== captchaActions.contact) {
    let internalErrorMessage = "Something unexpected went wrong while verifying the captcha client token";
    if (!parsedResponse.success) internalErrorMessage = "Recaptcha response came but the reCAPTCHA client token wasn't valid";
    else if (parsedResponse.score <= 0.5) internalErrorMessage = "Recaptcha response came but the score was lower than the thresold for bot detection clearance";
    else if (parsedResponse.action !== action) internalErrorMessage = "Recaptcha response came but the action used for the client captcha token didn't fit the one required";
    logServerError(new WrappingError(internalErrorMessage, parsedResponse));
    return {
      isValid: false, message: "Sorry but our security check found the activity unusual. Please try again later."
    } as const;
  } else {
    return { isValid: true } as const;
  }
}

const fetchWithTwoRetriesOnTimeout = addRetriesToFunction({
  fn: fetch, shouldStopTrying: (e) => {
    if (e instanceof Error && e.name === "TimeoutError") return false;
    return true;
  }
});

export type GrecaptchaServerVerificationAPIResponseJSON = {
  action: CaptchaAction;
  success: boolean;
  score: number;
  "error-codes"?: string[] | undefined;
};


export function isPrismaTransientError(prismaError: unknown) {
  const zodSafeParseResult = z.object({ code: z.string() }).safeParse(prismaError);
  if (!zodSafeParseResult.success) return false;
  const { code } = zodSafeParseResult.data;
  if (prismaTransientErrorCodes.includes(code)) return true;
  return false;
}


const prismaTransientErrorCodes = ["P001", "P1002", "P1008", "P1011", "P1017", "P2024", "P2034"];


