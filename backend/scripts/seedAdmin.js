import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Admin from "../models/Admin.js";
import mongoose from "mongoose";

dotenv.config();

async function seedAdmin() {
  const { ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

  if (!ADMIN_NAME || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error(
      "ADMIN_NAME, ADMIN_EMAIL and ADMIN_PASSWORD must be set in the backend .env file."
    );
    process.exit(1);
  }

  await connectDB();

  const existing = await Admin.findOne({ email: ADMIN_EMAIL.toLowerCase() });

  if (existing) {
    existing.name = ADMIN_NAME;
    existing.password = ADMIN_PASSWORD;
    await existing.save();
    console.log(`Admin account updated for ${ADMIN_EMAIL}`);
  } else {
    await Admin.create({
      name: ADMIN_NAME,
      email: ADMIN_EMAIL.toLowerCase(),
      password: ADMIN_PASSWORD,
    });
    console.log(`Admin account created for ${ADMIN_EMAIL}`);
  }

  await mongoose.connection.close();
  process.exit(0);
}

seedAdmin().catch((error) => {
  console.error("Failed to seed admin:", error);
  process.exit(1);
});
