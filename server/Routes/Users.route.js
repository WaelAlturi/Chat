import express from "express";
import User from "../Modules/User.Modules.js";
import auth from "../Middleware/tokenAuth.js";

const route = express.Router();

route.get("/users", auth, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
export default route;
