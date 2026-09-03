import crypto from "crypto";

// Generates a human-readable, unique-enough submission reference such as
// GRP-20260902-8F3C1A
export function generateSubmissionId() {
  const datePart = new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");

  const randomPart = crypto.randomBytes(3).toString("hex").toUpperCase();

  return `GRP-${datePart}-${randomPart}`;
}

// Generates a safe, unique filename for uploaded files while preserving
// the original extension.
export function generateStoredFilename(originalName) {
  const extension = originalName.slice(originalName.lastIndexOf("."));
  const safeExtension = extension.replace(/[^a-zA-Z0-9.]/g, "");
  const unique = `${Date.now()}-${crypto.randomBytes(8).toString("hex")}`;

  return `${unique}${safeExtension}`;
}
