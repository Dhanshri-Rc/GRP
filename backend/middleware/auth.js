import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import Admin from "../models/Admin.js";

// Protects admin routes. Expects "Authorization: Bearer <token>".
const protect = asyncHandler(async (req, res, next) => {
  let token;

  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }

  if (!token) {
    throw new ApiError(401, "Not authorized. Please log in.");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      throw new ApiError(401, "Admin account no longer exists.");
    }

    req.admin = admin;
    next();
  } catch (error) {
    throw new ApiError(401, "Session expired or invalid. Please log in again.");
  }
});

export default protect;
