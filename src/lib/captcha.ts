import crypto from "crypto";

export const CAPTCHA_COOKIE = "story_captcha";
const TTL_SECONDS = 600;

function getSecret(): string {
  const secret = process.env.CAPTCHA_SECRET_KEY;
  if (!secret) {
    throw new Error("CAPTCHA_SECRET_KEY is not configured");
  }
  return secret;
}

export function createCaptchaCookieValue(text: string): string {
  const expires = Math.floor(Date.now() / 1000) + TTL_SECONDS;
  const payload = `${text.toLowerCase()}|${expires}`;
  const signature = crypto
    .createHmac("sha256", getSecret())
    .update(payload)
    .digest("hex");
  return `${payload}|${signature}`;
}

export function verifyCaptchaCookie(
  answer: string,
  cookieValue: string | undefined,
): boolean {
  if (!answer || !cookieValue) return false;

  const parts = cookieValue.split("|");
  if (parts.length !== 3) return false;

  const [expected, expiresStr, signature] = parts;
  const payload = `${expected}|${expiresStr}`;
  const expectedSignature = crypto
    .createHmac("sha256", getSecret())
    .update(payload)
    .digest("hex");

  if (signature !== expectedSignature) return false;

  const expires = Number(expiresStr);
  if (!Number.isFinite(expires) || expires < Math.floor(Date.now() / 1000)) {
    return false;
  }

  return answer.trim().toLowerCase() === expected;
}
