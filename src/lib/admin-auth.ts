import crypto from "crypto";

export const ADMIN_SESSION_COOKIE = "starlight_admin_session";
const TTL_SECONDS = 60 * 60 * 8;

function getSecret(): string {
  const secret = process.env.CAPTCHA_SECRET_KEY;
  if (!secret) {
    throw new Error("CAPTCHA_SECRET_KEY is not configured");
  }
  return secret;
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

export function verifyAdminCredentials(
  username: string,
  password: string,
): boolean {
  const expectedUser = process.env.USERNAME;
  const expectedPass = process.env.PASSWORD;
  if (!expectedUser || !expectedPass) {
    return false;
  }
  return safeEqual(username, expectedUser) && safeEqual(password, expectedPass);
}

export function createAdminSessionCookieValue(): string {
  const expires = Math.floor(Date.now() / 1000) + TTL_SECONDS;
  const payload = `admin|${expires}`;
  const signature = crypto
    .createHmac("sha256", getSecret())
    .update(payload)
    .digest("hex");
  return `${payload}|${signature}`;
}

export function verifyAdminSessionCookie(
  cookieValue: string | undefined,
): boolean {
  if (!cookieValue) return false;

  const parts = cookieValue.split("|");
  if (parts.length !== 3) return false;

  const [, expiresStr, signature] = parts;
  const payload = `admin|${expiresStr}`;
  const expectedSignature = crypto
    .createHmac("sha256", getSecret())
    .update(payload)
    .digest("hex");

  if (signature !== expectedSignature) return false;

  const expires = Number(expiresStr);
  return Number.isFinite(expires) && expires >= Math.floor(Date.now() / 1000);
}
