import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError, { sendSuccess } from "../utils/apiError.js";
import Manuscript from "../models/Manuscript.js";
import Journal from "../models/Journal.js";
import { generateSubmissionId } from "../utils/generateId.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadsRoot = path.join(__dirname, "..", "uploads");

function safeUnlinkByPath(relativePath) {
  if (!relativePath) return;
  const fullPath = path.join(uploadsRoot, relativePath);
  if (fullPath.startsWith(uploadsRoot) && fs.existsSync(fullPath)) {
    fs.unlink(fullPath, () => {});
  }
}

function toFileRecord(file, subfolder) {
  if (!file) return null;

  return {
    originalName: file.originalname,
    storedName: file.filename,
    mimeType: file.mimetype,
    size: file.size,
    path: `${subfolder}/${file.filename}`,
  };
}

/* =========================================================
   PUBLIC
========================================================= */

// POST /api/manuscripts
export const submitManuscript = asyncHandler(async (req, res) => {
  const {
    title,
    journal,
    articleType,
    authorName,
    email,
    affiliation,
    country,
    orcid,
    abstract,
    keywords,
    comments,
    declaration,
  } = req.body;

  const requiredFields = {
    title,
    journal,
    articleType,
    authorName,
    email,
    affiliation,
    country,
    abstract,
    keywords,
  };

  const missing = Object.entries(requiredFields)
    .filter(([, value]) => !value || !String(value).trim())
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new ApiError(400, `Missing required fields: ${missing.join(", ")}`);
  }

  const declarationAccepted = declaration === "true" || declaration === true;

  if (!declarationAccepted) {
    throw new ApiError(400, "The manuscript declaration must be accepted.");
  }

  const journalDoc = await Journal.findOne({ _id: journal, isActive: true });

  if (!journalDoc) {
    throw new ApiError(400, "Selected journal is invalid or unavailable.");
  }

  const manuscriptFile =
    req.files?.manuscript?.[0] || req.files?.manuscriptFile?.[0];
  const coverLetterFile = req.files?.coverLetter?.[0];

  if (!manuscriptFile) {
    throw new ApiError(400, "Manuscript file is required.");
  }

  const manuscript = await Manuscript.create({
    submissionId: generateSubmissionId(),
    title,
    journal: journalDoc._id,
    journalName: journalDoc.name,
    articleType,
    authorName,
    email,
    affiliation,
    country,
    orcid: orcid || "",
    abstract,
    keywords,
    comments: comments || "",
    declaration: declarationAccepted,
    manuscriptFile: toFileRecord(manuscriptFile, "manuscripts"),
    coverLetter: coverLetterFile
      ? toFileRecord(coverLetterFile, "cover-letters")
      : null,
    status: "submitted",
  });

  sendSuccess(res, 201, "Manuscript submitted successfully", {
    submissionId: manuscript.submissionId,
  });
});

/* =========================================================
   ADMIN
========================================================= */

// GET /api/admin/manuscripts
export const getAdminManuscripts = asyncHandler(async (req, res) => {
  const {
    search = "",
    status = "",
    journal = "",
    page = 1,
    limit = 10,
  } = req.query;

  const query = {};

  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { authorName: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { submissionId: { $regex: search, $options: "i" } },
    ];
  }

  if (status && status !== "all") {
    query.status = status;
  }

  if (journal && journal !== "all") {
    query.journal = journal;
  }

  const pageNum = Math.max(parseInt(page, 10) || 1, 1);
  const limitNum = Math.max(parseInt(limit, 10) || 10, 1);

  const [manuscripts, total] = await Promise.all([
    Manuscript.find(query)
      .populate("journal", "name")
      .sort({ createdAt: -1 })
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum),
    Manuscript.countDocuments(query),
  ]);

  sendSuccess(res, 200, "Manuscripts fetched successfully", {
    manuscripts,
    pagination: {
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum) || 1,
    },
  });
});

// GET /api/admin/manuscripts/:id
export const getAdminManuscriptById = asyncHandler(async (req, res) => {
  const manuscript = await Manuscript.findById(req.params.id).populate(
    "journal",
    "name category"
  );

  if (!manuscript) {
    throw new ApiError(404, "Manuscript not found.");
  }

  sendSuccess(res, 200, "Manuscript fetched successfully", { manuscript });
});

// PATCH /api/admin/manuscripts/:id/status
export const updateManuscriptStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const validStatuses = ["submitted", "under-review", "accepted", "rejected"];

  if (!validStatuses.includes(status)) {
    throw new ApiError(400, "Invalid manuscript status.");
  }

  const manuscript = await Manuscript.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true }
  );

  if (!manuscript) {
    throw new ApiError(404, "Manuscript not found.");
  }

  sendSuccess(res, 200, "Manuscript status updated", { manuscript });
});

// DELETE /api/admin/manuscripts/:id
export const deleteManuscript = asyncHandler(async (req, res) => {
  const manuscript = await Manuscript.findById(req.params.id);

  if (!manuscript) {
    throw new ApiError(404, "Manuscript not found.");
  }

  safeUnlinkByPath(manuscript.manuscriptFile?.path);
  safeUnlinkByPath(manuscript.coverLetter?.path);

  await manuscript.deleteOne();

  sendSuccess(res, 200, "Manuscript deleted successfully", {});
});

function streamDownload(res, relativePath, originalName) {
  const fullPath = path.join(uploadsRoot, relativePath);

  if (!fullPath.startsWith(uploadsRoot) || !fs.existsSync(fullPath)) {
    throw new ApiError(404, "File not found.");
  }

  res.download(fullPath, originalName);
}

// GET /api/admin/manuscripts/:id/manuscript/download
export const downloadManuscriptFile = asyncHandler(async (req, res) => {
  const manuscript = await Manuscript.findById(req.params.id);

  if (!manuscript || !manuscript.manuscriptFile) {
    throw new ApiError(404, "Manuscript file not found.");
  }

  streamDownload(
    res,
    manuscript.manuscriptFile.path,
    manuscript.manuscriptFile.originalName
  );
});

// GET /api/admin/manuscripts/:id/cover-letter/download
export const downloadCoverLetterFile = asyncHandler(async (req, res) => {
  const manuscript = await Manuscript.findById(req.params.id);

  if (!manuscript || !manuscript.coverLetter) {
    throw new ApiError(404, "Cover letter file not found.");
  }

  streamDownload(
    res,
    manuscript.coverLetter.path,
    manuscript.coverLetter.originalName
  );
});
