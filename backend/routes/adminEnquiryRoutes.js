import { Router } from "express";
import {
  getAdminEnquiries,
  getAdminEnquiryById,
  updateEnquiryStatus,
  deleteEnquiry,
} from "../controllers/enquiryController.js";
import protect from "../middleware/auth.js";

const router = Router();

router.use(protect);

router.get("/", getAdminEnquiries);
router.get("/:id", getAdminEnquiryById);
router.patch("/:id/status", updateEnquiryStatus);
router.delete("/:id", deleteEnquiry);

export default router;
