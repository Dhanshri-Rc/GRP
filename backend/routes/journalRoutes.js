import { Router } from "express";
import {
  getPublicJournals,
  getPublicJournalById,
} from "../controllers/journalController.js";

const router = Router();

router.get("/", getPublicJournals);
router.get("/:id", getPublicJournalById);

export default router;
