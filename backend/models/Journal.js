import mongoose from "mongoose";

export const JOURNAL_CATEGORIES = [
  "engineering",
  "medicine",
  "sustainability",
  "interdisciplinary",
];

const journalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Journal name is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Journal category is required"],
      enum: {
        values: JOURNAL_CATEGORIES,
        message: "{VALUE} is not a supported journal category",
      },
    },
    coverImage: {
      type: String,
      required: [true, "Journal cover image is required"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

journalSchema.index({ category: 1, isActive: 1 });
journalSchema.index({ name: "text" });

export default mongoose.model("Journal", journalSchema);
