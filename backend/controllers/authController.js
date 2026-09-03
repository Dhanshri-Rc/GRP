import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError, { sendSuccess } from "../utils/apiError.js";
import Admin from "../models/Admin.js";

function signToken(admin) {
  return jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
  });
}

// POST /api/admin/auth/login
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required.");
  }

  const admin = await Admin.findOne({ email: email.toLowerCase() }).select(
    "+password"
  );

  if (!admin) {
    throw new ApiError(401, "Invalid email or password.");
  }

  const isMatch = await admin.comparePassword(password);

  if (!isMatch) {
    throw new ApiError(401, "Invalid email or password.");
  }

  const token = signToken(admin);

  sendSuccess(res, 200, "Login successful", {
    token,
    admin: {
      id: admin._id,
      name: admin.name,
      email: admin.email,
    },
  });
});

// GET /api/admin/auth/me
export const getMe = asyncHandler(async (req, res) => {
  sendSuccess(res, 200, "Admin profile fetched", {
    admin: {
      id: req.admin._id,
      name: req.admin.name,
      email: req.admin.email,
    },
  });
});
