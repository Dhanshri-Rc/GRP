import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    originalName: String,
    storedName: String,
    mimeType: String,
    size: Number,
    path: String,
  },
  { _id: false }
);

const manuscriptSchema = new mongoose.Schema(
  {
    submissionId: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: [true, "Manuscript title is required"],
      trim: true,
    },
    journal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Journal",
      required: [true, "Journal is required"],
    },
    journalName: {
      type: String,
      required: true,
    },
    articleType: {
      type: String,
      required: [true, "Article type is required"],
    },
    authorName: {
      type: String,
      required: [true, "Author name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"],
    },
    affiliation: {
      type: String,
      required: [true, "Affiliation is required"],
      trim: true,
    },
    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
    },
    orcid: {
      type: String,
      trim: true,
      default: "",
    },
    abstract: {
      type: String,
      required: [true, "Abstract is required"],
    },
    keywords: {
      type: String,
      required: [true, "Keywords are required"],
    },
    comments: {
      type: String,
      default: "",
    },
    declaration: {
      type: Boolean,
      required: true,
      validate: {
        validator: (value) => value === true,
        message: "Manuscript declaration must be accepted",
      },
    },
    manuscriptFile: {
      type: fileSchema,
      required: [true, "Manuscript file is required"],
    },
    coverLetter: {
      type: fileSchema,
      default: null,
    },
    status: {
      type: String,
      enum: ["submitted", "under-review", "accepted", "rejected"],
      default: "submitted",
    },
  },
  { timestamps: true }
);

manuscriptSchema.index({ status: 1 });
manuscriptSchema.index({ journal: 1 });
manuscriptSchema.index({
  title: "text",
  authorName: "text",
  email: "text",
});

export default mongoose.model("Manuscript", manuscriptSchema);
