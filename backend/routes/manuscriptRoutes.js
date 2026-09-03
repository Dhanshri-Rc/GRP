import { Router } from "express";
import { submitManuscript } from "../controllers/manuscriptController.js";
import uploadDocument from "../middleware/uploadDocument.js";
import { publicFormLimiter } from "../middleware/rateLimiters.js";

const router = Router();

router.post(
  "/",
  publicFormLimiter,
  uploadDocument.fields([
    { name: "manuscript", maxCount: 1 },
    { name: "manuscriptFile", maxCount: 1 },
    { name: "coverLetter", maxCount: 1 },
  ]),
  submitManuscript
);

export default router;
