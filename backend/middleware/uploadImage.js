import fs from "fs";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";
import { generateStoredFilename } from "../utils/generateId.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const journalsDir = path.join(__dirname, "..", "uploads", "journals");

if (!fs.existsSync(journalsDir)) {
  fs.mkdirSync(journalsDir, { recursive: true });
}

const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, journalsDir);
  },
  filename: (req, file, cb) => {
    cb(null, generateStoredFilename(file.originalname));
  },
});

function fileFilter(req, file, cb) {
  const extension = path
    .extname(file.originalname)
    .toLowerCase();

  const validExtension = allowedExtensions.includes(extension);
  const validMime = allowedMimeTypes.includes(file.mimetype);

  if (!validExtension || !validMime) {
    return cb(
      new Error("Only JPG, PNG, WEBP or GIF images are allowed for journal covers.")
    );
  }

  cb(null, true);
}

const uploadImage = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: Number(process.env.MAX_IMAGE_SIZE) || 5 * 1024 * 1024,
  },
});

export default uploadImage;
