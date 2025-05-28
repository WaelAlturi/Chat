import express from "express";
import bcrypt from "bcrypt";
import user from "../Modules/User.Modules.js";

const route = express.Router();

route.post("/signup", async (req, res) => {
  try {
    const { password, email } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    user.findOne({ email }).then((check) => {
      if (check) {
        res.status(401).json({
          message: "Email Invaled",
        });
      } else {
        const newUser = new user({ ...req.body, password: hashPassword });
        newUser
          .save()
          .then(() => {
            res.status(200).json({ message: "SignUp Complete" });
          })
          .catch((err) => {
            res.status(500).json({ message: err.message });
          });
      }
    });
  } catch (e) {
    res.status(401).json({
      message: e.message,
    });
  }
});
export default route;
