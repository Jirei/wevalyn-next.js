import "server-only";

export function logServerError(error: unknown) {
  console.error(error);
}