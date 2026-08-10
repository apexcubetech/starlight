export function sanitizeString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}
