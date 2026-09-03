import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError, { sendSuccess } from "../utils/apiError.js";
import Journal, { JOURNAL_CATEGORIES } from "../models/Journal.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const journalsDir = path.join(__dirname, "..", "uploads", "journals");

function coverImageUrl(req, filename) {
  return `${req.protocol}://${req.get("host")}/uploads/journals/${filename}`;
}

function safeUnlink(filename) {
  if (!filename) return;

  // Prevent path traversal — only allow plain filenames inside journalsDir
  const safeName = path.basename(filename);
  const fullPath = path.join(journalsDir, safeName);

  if (fullPath.startsWith(journalsDir) && fs.existsSync(fullPath)) {
    fs.unlink(fullPath, () => {});
  }
}

/* =========================================================
   PUBLIC
========================================================= */

// GET /api/journals?category=engineering
export const getPublicJournals = asyncHandler(async (req, res) => {
  const { category } = req.query;

  const query = { isActive: true };

  if (category && category !== "all") {
    if (!JOURNAL_CATEGORIES.includes(category)) {
      throw new ApiError(400, "Invalid journal category.");
    }
    query.category = category;
  }

  const journals = await Journal.find(query).sort({ createdAt: -1 });

  const data = journals.map((j) => ({
    id: j._id,
    name: j.name,
    category: j.category,
    coverImage: coverImageUrl(req, j.coverImage),
    isActive: j.isActive,
  }));

  sendSuccess(res, 200, "Journals fetched successfully", { journals: data });
});

// GET /api/journals/:id
export const getPublicJournalById = asyncHandler(async (req, res) => {
  const journal = await Journal.findOne({
    _id: req.params.id,
    isActive: true,
  });

  if (!journal) {
    throw new ApiError(404, "Journal not found.");
  }

  sendSuccess(res, 200, "Journal fetched successfully", {
    journal: {
      id: journal._id,
      name: journal.name,
      category: journal.category,
      coverImage: coverImageUrl(req, journal.coverImage),
      isActive: journal.isActive,
    },
  });
});

/* =========================================================
   ADMIN
========================================================= */

// GET /api/admin/journals
export const getAdminJournals = asyncHandler(async (req, res) => {
  const { search = "", category = "", page = 1, limit = 10 } = req.query;

  const query = {};

  if (search) {
    query.name = { $regex: search, $options: "i" };
  }

  if (category && category !== "all") {
    query.category = category;
  }

  const pageNum = Math.max(parseInt(page, 10) || 1, 1);
  const limitNum = Math.max(parseInt(limit, 10) || 10, 1);

  const [journals, total] = await Promise.all([
    Journal.find(query)
      .sort({ createdAt: -1 })
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum),
    Journal.countDocuments(query),
  ]);

  const data = journals.map((j) => ({
    id: j._id,
    name: j.name,
    category: j.category,
    coverImage: coverImageUrl(req, j.coverImage),
    isActive: j.isActive,
    createdAt: j.createdAt,
  }));

  sendSuccess(res, 200, "Journals fetched successfully", {
    journals: data,
    pagination: {
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum) || 1,
    },
  });
});

// GET /api/admin/journals/:id
export const getAdminJournalById = asyncHandler(async (req, res) => {
  const journal = await Journal.findById(req.params.id);

  if (!journal) {
    throw new ApiError(404, "Journal not found.");
  }

  sendSuccess(res, 200, "Journal fetched successfully", {
    journal: {
      id: journal._id,
      name: journal.name,
      category: journal.category,
      coverImage: coverImageUrl(req, journal.coverImage),
      isActive: journal.isActive,
      createdAt: journal.createdAt,
      updatedAt: journal.updatedAt,
    },
  });
});

// POST /api/admin/journals
export const createJournal = asyncHandler(async (req, res) => {
  const { name, category, isActive } = req.body;

  if (!name || !category) {
    throw new ApiError(400, "Journal name and category are required.");
  }

  if (!JOURNAL_CATEGORIES.includes(category)) {
    throw new ApiError(400, "Invalid journal category.");
  }

  if (!req.file) {
    throw new ApiError(400, "Journal cover image is required.");
  }

  const journal = await Journal.create({
    name,
    category,
    coverImage: req.file.filename,
    isActive: isActive === undefined ? true : isActive === "true" || isActive === true,
  });

  sendSuccess(res, 201, "Journal created successfully", {
    journal: {
      id: journal._id,
      name: journal.name,
      category: journal.category,
      coverImage: coverImageUrl(req, journal.coverImage),
      isActive: journal.isActive,
    },
  });
});

// PUT /api/admin/journals/:id
export const updateJournal = asyncHandler(async (req, res) => {
  const journal = await Journal.findById(req.params.id);

  if (!journal) {
    throw new ApiError(404, "Journal not found.");
  }

  const { name, category, isActive } = req.body;

  if (category && !JOURNAL_CATEGORIES.includes(category)) {
    throw new ApiError(400, "Invalid journal category.");
  }

  if (name !== undefined) journal.name = name;
  if (category !== undefined) journal.category = category;
  if (isActive !== undefined) {
    journal.isActive = isActive === "true" || isActive === true;
  }

  if (req.file) {
    const oldImage = journal.coverImage;
    journal.coverImage = req.file.filename;
    safeUnlink(oldImage);
  }

  await journal.save();

  sendSuccess(res, 200, "Journal updated successfully", {
    journal: {
      id: journal._id,
      name: journal.name,
      category: journal.category,
      coverImage: coverImageUrl(req, journal.coverImage),
      isActive: journal.isActive,
    },
  });
});

// DELETE /api/admin/journals/:id
export const deleteJournal = asyncHandler(async (req, res) => {
  const journal = await Journal.findById(req.params.id);

  if (!journal) {
    throw new ApiError(404, "Journal not found.");
  }

  safeUnlink(journal.coverImage);
  await journal.deleteOne();

  sendSuccess(res, 200, "Journal deleted successfully", {});
});
