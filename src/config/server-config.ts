import "server-only";
import { z } from "zod";

const serverEnvSchema = z.object({ RECAPTCHA_SECRET: z.string() });

export const serverEnv = serverEnvSchema.parse({
  RECAPTCHA_SECRET: process.env.RECAPTCHA_SECRET,
});
