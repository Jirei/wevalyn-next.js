import "client-only";
import { clientEnv } from "@/config/client-config";
import { CaptchaAction } from "@/lib/common";
import { WrappingError } from "../common";

/**
 * 
 * @param grecaptcha 
 * @param action 
 * @returns An object with the token (if no error) and an error flag.
 */
export async function checkCaptchaActionOnClient(grecaptcha: ReCaptchaV2.ReCaptcha, action: CaptchaAction): Promise<CheckCaptchaActionOnClientReturnValue> {
  try {
    const { isReady, hasError, error } = await isGrecaptchaReady();
    if (hasError || !isReady) throw new WrappingError("Grecaptcha library not ready even though it's needed.", error);
    const token = await grecaptcha.execute(
      clientEnv.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      { action }
    );
    return { token, hasError: false };
  } catch (error) {
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

