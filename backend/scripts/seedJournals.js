import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Journal from "../models/Journal.js";
import { generateStoredFilename } from "../utils/generateId.js";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Source images live in the frontend project's asset folder. This script
// copies them into backend/uploads/journals so the seeded journals have a
// working cover image served by the backend.
const sourceImageDir = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "src",
  "assets",
  "img"
);
const targetImageDir = path.join(__dirname, "..", "uploads", "journals");

if (!fs.existsSync(targetImageDir)) {
  fs.mkdirSync(targetImageDir, { recursive: true });
}

const IMAGES = {
  j1: "artificial-intelligence-engineering-journal.webp",
  j2: "robotics-automation-technology-journal.webp",
  j3: "quantum-computing-research-journal.webp",
};

const journalsToSeed = [
  // Engineering & Technology
  { name: "Artificial Intelligence Reviews", category: "engineering", image: "j1" },
  { name: "Robotics & Automation Reviews", category: "engineering", image: "j2" },
  { name: "Quantum Computing Reviews", category: "engineering", image: "j3" },
  { name: "Edge Intelligence & Computing Reviews", category: "engineering", image: "j2" },
  { name: "Digital Twin Technologies Reviews", category: "engineering", image: "j1" },

  // Medicine & Health Sciences
  { name: "AI-Enabled Medical Imaging Reviews", category: "medicine", image: "j3" },
  { name: "Digital Biomarkers & Wearables Reviews", category: "medicine", image: "j2" },
  { name: "Robotic Surgery Reviews", category: "medicine", image: "j1" },
  { name: "Precision Diagnostics & Digital Pathology Reviews", category: "medicine", image: "j2" },
  { name: "Neurotechnology Reviews", category: "medicine", image: "j3" },

  // Sustainability & Environment
  { name: "Sustainability Reviews", category: "sustainability", image: "j2" },
  { name: "Renewable Energy and Systems Reviews", category: "sustainability", image: "j1" },
  { name: "Climate & Urban Resilience Reviews", category: "sustainability", image: "j3" },
  { name: "Biosensors & Environmental Tech Reviews", category: "sustainability", image: "j1" },
  { name: "Green Materials & Circular Economy Reviews", category: "sustainability", image: "j2" },
];

function copyImage(imageKey) {
  const sourceFile = path.join(sourceImageDir, IMAGES[imageKey]);

  if (!fs.existsSync(sourceFile)) {
    console.warn(`Source image not found, skipping copy: ${sourceFile}`);
    return null;
  }

  const storedName = generateStoredFilename(IMAGES[imageKey]);
  const targetFile = path.join(targetImageDir, storedName);

  fs.copyFileSync(sourceFile, targetFile);

  return storedName;
}

async function seedJournals() {
  await connectDB();

  const existingCount = await Journal.countDocuments({});

  if (existingCount > 0) {
    console.log(
      `Journals collection already has ${existingCount} document(s). Skipping seed to avoid duplicates.`
    );
    console.log(
      "Delete existing journals first if you want to reseed from scratch."
    );
    await mongoose.connection.close();
    process.exit(0);
  }

  const imageCache = {};

  const docs = journalsToSeed.map((j) => {
    if (!imageCache[j.image]) {
      imageCache[j.image] = copyImage(j.image);
    }

    return {
      name: j.name,
      category: j.category,
      coverImage: imageCache[j.image] || `${j.image}.webp`,
      isActive: true,
    };
  });

  await Journal.insertMany(docs);

  console.log(`Seeded ${docs.length} journals successfully.`);

  await mongoose.connection.close();
  process.exit(0);
}

seedJournals().catch((error) => {
  console.error("Failed to seed journals:", error);
  process.exit(1);
});
