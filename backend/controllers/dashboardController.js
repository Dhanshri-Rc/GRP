import asyncHandler from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/apiError.js";
import Journal from "../models/Journal.js";
import Manuscript from "../models/Manuscript.js";
import Enquiry from "../models/Enquiry.js";

// GET /api/admin/dashboard/stats
export const getDashboardStats = asyncHandler(async (req, res) => {
  const [
    totalJournals,
    totalActiveJournals,
    totalManuscripts,
    newManuscripts,
    totalEnquiries,
    newEnquiries,
  ] = await Promise.all([
    Journal.countDocuments({}),
    Journal.countDocuments({ isActive: true }),
    Manuscript.countDocuments({}),
    Manuscript.countDocuments({ status: "submitted" }),
    Enquiry.countDocuments({}),
    Enquiry.countDocuments({ status: "new" }),
  ]);

  sendSuccess(res, 200, "Dashboard statistics fetched successfully", {
    totalJournals,
    totalActiveJournals,
    totalManuscripts,
    newManuscripts,
    totalEnquiries,
    newEnquiries,
  });
});
