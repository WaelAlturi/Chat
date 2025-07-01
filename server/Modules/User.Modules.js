import mongoose, { Schema } from "mongoose";
const User = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String },
  avatar: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
  },
});
export default mongoose.model("Users", User);
