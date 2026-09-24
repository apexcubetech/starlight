import { StorySubmission } from "@/models/StorySubmission";

const SERIAL_REGEX = /^(\d+)([A-Z]+)?$/;

export function normalizePhone(value: string): string {
  return value.replace(/\D/g, "");
}

function parseSerial(
  serial: string,
): { base: number; suffix: string | null } | null {
  const match = SERIAL_REGEX.exec(serial.trim());
  if (!match) return null;
  const base = Number(match[1]);
  if (!Number.isFinite(base) || base < 1) return null;
  return { base, suffix: match[2] ?? null };
}

function nextSuffix(suffix: string): string {
  const chars = suffix.split("");
  let index = chars.length - 1;

  while (index >= 0) {
    if (chars[index] !== "Z") {
      chars[index] = String.fromCharCode(chars[index].charCodeAt(0) + 1);
      return chars.join("");
    }
    chars[index] = "A";
    index -= 1;
  }

  return `A${chars.join("")}`;
}

function suffixForRepeatIndex(index: number): string {
  let suffix = "A";
  for (let i = 1; i <= index; i += 1) {
    if (i > 1) {
      suffix = nextSuffix(suffix);
    }
  }
  return suffix;
}

function buildUserMatch(email: string, phone: string, normalizedPhone: string) {
  const conditions: Array<{
    email?: string;
    phone?: string;
    normalizedPhone?: string;
  }> = [{ email }, { phone }];

  if (normalizedPhone) {
    conditions.push({ normalizedPhone });
  }

  return { $or: conditions };
}

export async function assignSerialNumber(
  email: string,
  phone: string,
): Promise<{ serialNumber: string; normalizedPhone: string }> {
  const normalizedPhone = normalizePhone(phone);

  const existing = await StorySubmission.find({
    serialNumber: { $exists: true, $nin: [null, ""] },
    ...buildUserMatch(email, phone, normalizedPhone),
  })
    .select("serialNumber")
    .sort({ createdAt: 1 })
    .lean();

  if (existing.length > 0) {
    const firstParsed = parseSerial(existing[0].serialNumber);
    if (!firstParsed) {
      throw new Error("Invalid serial number on existing submission.");
    }

    const { base } = firstParsed;
    const suffix = suffixForRepeatIndex(existing.length - 1);

    return {
      serialNumber: `${base}${suffix}`,
      normalizedPhone,
    };
  }

  const allSerials = await StorySubmission.find({
    serialNumber: { $exists: true, $nin: [null, ""] },
  })
    .select("serialNumber")
    .lean();

  let maxBase = 0;
  for (const record of allSerials) {
    const parsed = parseSerial(record.serialNumber);
    if (parsed && parsed.base > maxBase) {
      maxBase = parsed.base;
    }
  }

  return {
    serialNumber: String(maxBase + 1),
    normalizedPhone,
  };
}
