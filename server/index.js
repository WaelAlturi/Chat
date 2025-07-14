import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Account from "./Routes/Account.Route.js";
import Message from "./Routes/Message.Route.js";
import User from "./Routes/Users.route.js";
import auth from "./Middleware/tokenAuth.js";
import { app, server } from "./socket.js";
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB IS ON");
  })
  .catch((e) => {
    console.log(e.message);
  });
app.use("/account", Account);
app.use("/", Message);
app.use("/user", User);
app.use(auth);

server.listen(process.env.PORT, () => {
  console.log(`Run On PORT:${process.env.PORT}`);
});
