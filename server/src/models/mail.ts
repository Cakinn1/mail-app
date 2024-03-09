import mongoose, { Schema } from "mongoose";
export interface MailData {
  id: number;
  fullName: string;
  datePosted: string;
  email: string;
  userPost: string;
  postType: string[];
  seen: "seen" | "not_seen";
  category: "archive" | "trash" | "junk" | "sent" | "drafts" | "inbox";
  subject: string;
}

const MailSchema = new Schema<MailData>({
  // create blueprint for mongoose
  category: {
    type: String,
    required: true,
  },
  datePosted: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  seen: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userPost: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  postType: {
    type: [String],
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
});

export const Mail = mongoose.model("mail", MailSchema)

