import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";

import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import { apiLimiter } from "./middleware/rateLimiters.js";

import journalRoutes from "./routes/journalRoutes.js";
import manuscriptRoutes from "./routes/manuscriptRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import adminAuthRoutes from "./routes/adminAuthRoutes.js";
import adminJournalRoutes from "./routes/adminJournalRoutes.js";
import adminManuscriptRoutes from "./routes/adminManuscriptRoutes.js";
import adminEnquiryRoutes from "./routes/adminEnquiryRoutes.js";
import adminDashboardRoutes from "./routes/adminDashboardRoutes.js";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// Trust proxy (needed on Render/Railway for correct req.protocol / rate limiting)
app.set("trust proxy", 1);

connectDB();

/* =========================================================
   SECURITY & CORE MIDDLEWARE
========================================================= */
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);

const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(mongoSanitize());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/api", apiLimiter);

/* =========================================================
   STATIC FILES
   Only journal cover images are publicly served.
   Manuscript and cover-letter uploads are never statically
   exposed — they are only reachable through the protected
   admin download endpoints.
========================================================= */
app.use(
  "/uploads/journals",
  express.static(path.join(__dirname, "uploads", "journals"))
);

/* =========================================================
   ROUTES
========================================================= */
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "GRP API is running" });
});

app.use("/api/journals", journalRoutes);
app.use("/api/manuscripts", manuscriptRoutes);
app.use("/api/enquiries", enquiryRoutes);

app.use("/api/admin/auth", adminAuthRoutes);
app.use("/api/admin/journals", adminJournalRoutes);
app.use("/api/admin/manuscripts", adminManuscriptRoutes);
app.use("/api/admin/enquiries", adminEnquiryRoutes);
app.use("/api/admin/dashboard", adminDashboardRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`GRP backend server running on port ${PORT}`);
});
