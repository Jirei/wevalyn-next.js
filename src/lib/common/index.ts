import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**************************************************************************************************/
/* log function */

export function logError(error: unknown) {
  process.env.IS_IN_SERVER ? _logServerError(error) : _logClientError(error);
}

function _logServerError(error: unknown) {
  console.error(error);
}
function _logClientError(error: unknown) {
  if (!process.env.NEXT_PUBLIC_PRODUCTION_MODE) console.error(error);
}

/**************************************************************************************************/

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const captchaActions = { contact: "contact" } as const;

export type AnyFunction = (...args: any[]) => any;
export type FunctionReturningBooleanOrBooleanPromise = (...args: any[]) => boolean | Promise<boolean>;


export type CaptchaAction = (typeof captchaActions)[keyof typeof captchaActions];


export class WrappingError extends Error {
  constructor(message: string, cause: unknown) {
    super(message);
    this.cause = cause;
    this.name = "WrappingError";
  }
}

/**
 * 
 * @param duration -  How many milliseconds to wait
 */
export async function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}


export function getRandomNumber(min: number, max: number) {
  // algorithm comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
