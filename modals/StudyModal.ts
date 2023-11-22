import mongoose, { Schema } from "mongoose";

const studySchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const study =
  mongoose.models.studyNext || mongoose.model("studyNext", studySchema);
export default study;
