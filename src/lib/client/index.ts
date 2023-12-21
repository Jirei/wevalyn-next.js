import "client-only";
import { clientEnv } from "@/config/client-config";
import { CaptchaAction } from "@/types";


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
  let token;
  try {
    const isGrecaptchaLibReady = await isGrecaptchaReady();
    if (!isGrecaptchaLibReady) throw new Error("Grecaptcha lib not ready");
    token = await grecaptcha.execute(
      clientEnv.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      { action }
    );
    return { token, error: null };
  } catch (e) {
    console.log(e);
    return { token: null, error: true };
  }
}
async function isGrecaptchaReady() {
  const isReady = await new Promise((resolve, reject) => {
    grecaptcha.ready(() => resolve(true));
    setTimeout(() => reject(false), 2000);
  });
  // double exclamation mark because typing didn't get the boolean nature so need to add explicitly
  return !!isReady;
}

type CheckCaptchaActionOnClientReturnValue = {
  token: string;
  error: null;
} | {
  token: null;
  error: true;
};

export const captchaActions = { contact: "contact" } as const;
