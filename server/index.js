import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Account from "./Routes/Account.Route.js";

dotenv.config();
const app = express();

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

app.listen(process.env.PORT, () => {
  console.log(`Run On PORT:${process.env.PORT}`);
});
