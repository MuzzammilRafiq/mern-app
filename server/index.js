import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import postRoute from "./src/routes/postRoute.js";
import authRoute from "./src/routes/authRoute.js";
import userRoute from "./src/routes/userRoute.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
); // if you want to send cookie etc.
dotenv.config();
app.use(express.json());

app.use("/post", postRoute);
app.use("/auth", authRoute);
app.use("/user", userRoute);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("mongodb connected");
  } catch (err) {
    console.log(err);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnecd");
});

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("backend connected");
});
