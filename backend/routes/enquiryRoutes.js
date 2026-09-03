import { Router } from "express";
import { submitEnquiry } from "../controllers/enquiryController.js";
import { publicFormLimiter } from "../middleware/rateLimiters.js";

const router = Router();

router.post("/", publicFormLimiter, submitEnquiry);

export default router;
