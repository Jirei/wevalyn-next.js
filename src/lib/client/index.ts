import "client-only";
import { clientEnv } from "@/config/client-config";
import { CaptchaAction } from "@/lib/common";
import { WrappingError } from "../common";


export function logClientError(error: unknown) {
  if (!process.env.NEXT_PUBLIC_PRODUCTION_MODE) console.error(error);
}

/**
 * 
 * @param grecaptcha 
 * @param action 
 * @returns An object with the token (if no error) and an error flag.
 */
export async function checkCaptchaActionOnClient(grecaptcha: ReCaptchaV2.ReCaptcha, action: CaptchaAction): Promise<CheckCaptchaActionOnClientReturnValue> {
  if (process.env.NEXT_PUBLIC_PLAYWRIGHT_MODE === "true") return { token: "test-placeholder", hasError: false };
  try {
    const { isReady, hasError, error } = await isGrecaptchaReady();
    if (hasError || !isReady) throw new WrappingError("Grecaptcha library not ready even though it's needed.", error);
    let token;
    let lastError;
    for (let i = 0; i < 3; i++) {
      try {
        token = await grecaptcha.execute(
          clientEnv.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action }
        );
        break;
      }
      catch (e) {
        if (i === 3) lastError = e;
        else logClientError(e);
      }
    }
    if (!token) throw lastError;
    return { token, hasError: false };
  } catch (error) {
    logClientError(error);
    return { token: null, error, hasError: true };
  }
}
async function isGrecaptchaReady() {
  try {
    await new Promise((resolve, reject) => {
      grecaptcha.ready(() => resolve(true));
      setTimeout(() => reject(new Error("grepcaptcha.ready() timed out")), 2000);
    });
    return { isReady: true, hasError: false };
  } catch (error) {
    return { isReady: false, hasError: true, error };
  }
}

type CheckCaptchaActionOnClientReturnValue = {
  token: string;
  hasError: false;
  error?: undefined;
} | {
  token: null;
  hasError: true;
  error: unknown;
};

