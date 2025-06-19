import express from "express";
import Message from "../Modules/Message.Modules.js";
import User from "../Modules/User.Modules.js";
import auth from "../Middleware/tokenAuth.js";

const route = express.Router();

route.get("/", auth, async (req, res) => {
  try {
    const messages = await Message.find({ sender: req.user.id });
    res.status(200).json(messages);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

route.post("/newmessage", auth, async (req, res) => {
  try {
    const { receverUsername, content } = req.body;
    const receiverExists = await User.findOne({ username: receverUsername });

    if (!receiverExists) {
      return res.status(404).json({ message: "Receiver not found" });
    }

    const message = new Message({
      sender: req.user.id,
      receiver: receiverExists.id,
      content,
    });
    await message.save();
    res.status(200).json({ message: "New message added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

route.delete("/deletemessage/:_id", auth, async (req, res) => {
  try {
    const _id = req.params._id;

    await Message.findByIdAndDelete(_id)
      .then(() => {
        res.status(200).json({
          message: "Delete Message",
        });
      })
      .catch((e) => {
        res.status(500).json({
          message: e.message,
        });
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
route.put("/editmessage/:_id", auth, async (req, res) => {
  try {
    const _id = req.params._id;

    await Message.findByIdAndUpdate(_id, req.body)
      .then(() => {
        res.status(200).json({
          message: "Update Message",
        });
      })
      .catch((e) => {
        res.status(500).json({
          message: e.message,
        });
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default route;
