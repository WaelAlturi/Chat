import mongoose, { Schema } from "mongoose";
const User = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String },
});
export default mongoose.model("Users", User);
