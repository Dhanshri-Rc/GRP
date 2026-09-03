import { Router } from "express";
import {
  getAdminManuscripts,
  getAdminManuscriptById,
  updateManuscriptStatus,
  deleteManuscript,
  downloadManuscriptFile,
  downloadCoverLetterFile,
} from "../controllers/manuscriptController.js";
import protect from "../middleware/auth.js";

const router = Router();

router.use(protect);

router.get("/", getAdminManuscripts);
router.get("/:id", getAdminManuscriptById);
router.patch("/:id/status", updateManuscriptStatus);
router.delete("/:id", deleteManuscript);
router.get("/:id/manuscript/download", downloadManuscriptFile);
router.get("/:id/cover-letter/download", downloadCoverLetterFile);

export default router;
