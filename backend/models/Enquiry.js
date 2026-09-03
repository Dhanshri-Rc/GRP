import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"],
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
    },
    type: {
      type: String,
      required: [true, "Enquiry type is required"],
      enum: [
        "manuscript",
        "journal",
        "reviewer",
        "partnership",
        "general",
      ],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
    privacy: {
      type: Boolean,
      required: true,
      validate: {
        validator: (value) => value === true,
        message: "Privacy consent must be accepted",
      },
    },
    status: {
      type: String,
      enum: ["new", "read", "resolved"],
      default: "new",
    },
  },
  { timestamps: true }
);

enquirySchema.index({ status: 1 });
enquirySchema.index({
  name: "text",
  email: "text",
  subject: "text",
});

export default mongoose.model("Enquiry", enquirySchema);
