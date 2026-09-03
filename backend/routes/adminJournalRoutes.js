import { Router } from "express";
import {
  getAdminJournals,
  getAdminJournalById,
  createJournal,
  updateJournal,
  deleteJournal,
} from "../controllers/journalController.js";
import protect from "../middleware/auth.js";
import uploadImage from "../middleware/uploadImage.js";

const router = Router();

router.use(protect);

router.get("/", getAdminJournals);
router.post("/", uploadImage.single("coverImage"), createJournal);
router.get("/:id", getAdminJournalById);
router.put("/:id", uploadImage.single("coverImage"), updateJournal);
router.delete("/:id", deleteJournal);

export default router;
