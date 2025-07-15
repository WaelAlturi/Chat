import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Account from "./Routes/Account.Route.js";
import Message from "./Routes/Message.Route.js";
import User from "./Routes/Users.route.js";
import auth from "./Middleware/tokenAuth.js";
import path from "path";
import { fileURLToPath } from "url";
import { app, server } from "./socket.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
app.use("/api/account", Account);
app.use("/api/", Message);
app.use("/api/user", User);
app.use(auth);

const clientBuildPath = path.join(__dirname, "..", "client", "dist");
app.use(express.static(clientBuildPath));

app.get("/{*any}", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});
server.listen(process.env.PORT, () => {
  console.log(`Run On PORT:${process.env.PORT}`);
});
