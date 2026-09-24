import fs from "fs";
import mongoose from "mongoose";

function normalizePhone(value) {
  return value.replace(/\D/g, "");
}

function nextSuffix(suffix) {
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

function suffixForRepeatIndex(index) {
  let suffix = "A";
  for (let i = 1; i <= index; i += 1) {
    if (i > 1) {
      suffix = nextSuffix(suffix);
    }
  }
  return suffix;
}

function sameUser(a, b) {
  if (a.email === b.email) return true;
  if (a.phone === b.phone) return true;
  const phoneA = normalizePhone(a.phone);
  const phoneB = normalizePhone(b.phone);
  return phoneA.length > 0 && phoneA === phoneB;
}

function assignForUser(records, nextBaseRef) {
  const sorted = [...records].sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  );
  const base = nextBaseRef.value;
  nextBaseRef.value += 1;

  return sorted.map((record, index) => ({
    _id: record._id,
    serialNumber:
      index === 0 ? String(base) : `${base}${suffixForRepeatIndex(index - 1)}`,
    normalizedPhone: normalizePhone(record.phone),
  }));
}

const env = fs.readFileSync(".env.local", "utf8");
const uri = env.match(/^MONGODB_URI=(.+)$/m)?.[1];

if (!uri) {
  console.error("MONGODB_URI not found in .env.local");
  process.exit(1);
}

const submissionSchema = new mongoose.Schema(
  {
    serialNumber: String,
    name: String,
    email: String,
    phone: String,
    normalizedPhone: String,
    createdAt: Date,
  },
  { collection: "storysubmissions" },
);

const StorySubmission = mongoose.model("StorySubmissionBackfill", submissionSchema);

await mongoose.connect(uri);

const all = await StorySubmission.find().sort({ createdAt: 1 }).lean();
const assigned = new Set();
const updates = [];
const nextBaseRef = { value: 1 };

for (const record of all) {
  if (assigned.has(String(record._id))) continue;

  const group = all.filter((candidate) => sameUser(candidate, record));
  for (const update of assignForUser(group, nextBaseRef)) {
    assigned.add(String(update._id));
    updates.push(update);
  }
}

for (const update of updates) {
  await StorySubmission.updateOne(
    { _id: update._id },
    {
      $set: {
        serialNumber: update.serialNumber,
        normalizedPhone: update.normalizedPhone,
      },
    },
  );
  console.log(`Updated ${update._id} -> ${update.serialNumber}`);
}

console.log(`Assigned serial numbers to ${updates.length} submission(s).`);
await mongoose.disconnect();
