import fs from "fs";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";
import { generateStoredFilename } from "../utils/generateId.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const manuscriptsDir = path.join(__dirname, "..", "uploads", "manuscripts");
const coverLettersDir = path.join(__dirname, "..", "uploads", "cover-letters");

[manuscriptsDir, coverLettersDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const allowedMimeTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const allowedExtensions = [".pdf", ".doc", ".docx"];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const targetDir =
      file.fieldname === "coverLetter" ? coverLettersDir : manuscriptsDir;
    cb(null, targetDir);
  },
  filename: (req, file, cb) => {
    cb(null, generateStoredFilename(file.originalname));
  },
});

function fileFilter(req, file, cb) {
  const extension = path.extname(file.originalname).toLowerCase();

  const validExtension = allowedExtensions.includes(extension);
  const validMime = allowedMimeTypes.includes(file.mimetype);

  if (!validExtension || !validMime) {
    return cb(new Error("Only PDF, DOC or DOCX files are allowed."));
  }

  cb(null, true);
}

const uploadDocument = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: Number(process.env.MAX_DOCUMENT_SIZE) || 10 * 1024 * 1024,
  },
});

export default uploadDocument;
