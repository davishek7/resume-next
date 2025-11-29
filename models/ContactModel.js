import mongoose from "mongoose";
import { MONGO_COLLECTION_NAME } from "@/constants/db.constant";

const ContactSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    from_app: { type: String, required: true },

    read_status: { type: Boolean, default: false },

    created_at: { type: Date, default: () => new Date() },

    deleted: { type: Boolean, default: false },
    deleted_at: { type: Date, default: null },
  },
  {
    timestamps: false,
    versionKey: false,
    collection: MONGO_COLLECTION_NAME,
  }
);

// Required Next.js pattern to avoid model overwrite errors
export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
