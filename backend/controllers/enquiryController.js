import asyncHandler from "../utils/asyncHandler.js";
import ApiError, { sendSuccess } from "../utils/apiError.js";
import Enquiry from "../models/Enquiry.js";

/* =========================================================
   PUBLIC
========================================================= */

// POST /api/enquiries
export const submitEnquiry = asyncHandler(async (req, res) => {
  const { name, email, subject, type, message, privacy } = req.body;

  const requiredFields = { name, email, subject, type, message };
  const missing = Object.entries(requiredFields)
    .filter(([, value]) => !value || !String(value).trim())
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new ApiError(400, `Missing required fields: ${missing.join(", ")}`);
  }

  const privacyAccepted = privacy === true || privacy === "true";

  if (!privacyAccepted) {
    throw new ApiError(400, "Privacy consent must be accepted.");
  }

  const enquiry = await Enquiry.create({
    name,
    email,
    subject,
    type,
    message,
    privacy: privacyAccepted,
    status: "new",
  });

  sendSuccess(res, 201, "Enquiry submitted successfully", {
    id: enquiry._id,
  });
});

/* =========================================================
   ADMIN
========================================================= */

// GET /api/admin/enquiries
export const getAdminEnquiries = asyncHandler(async (req, res) => {
  const { search = "", status = "", page = 1, limit = 10 } = req.query;

  const query = {};

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { subject: { $regex: search, $options: "i" } },
    ];
  }

  if (status && status !== "all") {
    query.status = status;
  }

  const pageNum = Math.max(parseInt(page, 10) || 1, 1);
  const limitNum = Math.max(parseInt(limit, 10) || 10, 1);

  const [enquiries, total] = await Promise.all([
    Enquiry.find(query)
      .sort({ createdAt: -1 })
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum),
    Enquiry.countDocuments(query),
  ]);

  sendSuccess(res, 200, "Enquiries fetched successfully", {
    enquiries,
    pagination: {
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum) || 1,
    },
  });
});

// GET /api/admin/enquiries/:id
export const getAdminEnquiryById = asyncHandler(async (req, res) => {
  const enquiry = await Enquiry.findById(req.params.id);

  if (!enquiry) {
    throw new ApiError(404, "Enquiry not found.");
  }

  sendSuccess(res, 200, "Enquiry fetched successfully", { enquiry });
});

// PATCH /api/admin/enquiries/:id/status
export const updateEnquiryStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const validStatuses = ["new", "read", "resolved"];

  if (!validStatuses.includes(status)) {
    throw new ApiError(400, "Invalid enquiry status.");
  }

  const enquiry = await Enquiry.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true }
  );

  if (!enquiry) {
    throw new ApiError(404, "Enquiry not found.");
  }

  sendSuccess(res, 200, "Enquiry status updated", { enquiry });
});

// DELETE /api/admin/enquiries/:id
export const deleteEnquiry = asyncHandler(async (req, res) => {
  const enquiry = await Enquiry.findById(req.params.id);

  if (!enquiry) {
    throw new ApiError(404, "Enquiry not found.");
  }

  await enquiry.deleteOne();

  sendSuccess(res, 200, "Enquiry deleted successfully", {});
});
