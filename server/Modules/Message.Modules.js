import mongoose, { Schema } from "mongoose";

const Messages = new Schema({
  sender: { type: mongoose.Schema.ObjectId, ref: "User", require: true },
  receiver: { type: mongoose.Schema.ObjectId, ref: "User" },
  content: { type: String, require: true },
  timestamp: { type: Date, default: Date.now },
});
export default mongoose.model("message", Messages);
