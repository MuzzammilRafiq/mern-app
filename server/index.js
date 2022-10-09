import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import postRoute from "./src/routes/postRoute.js";
import authRoute from "./src/routes/authRoute.js";
import userRoute from "./src/routes/userRoute.js";

const app = express();
dotenv.config();

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

//middlewares
app.use(cors());
app.use(express.json());

app.use("/post", postRoute);
app.use("/auth", authRoute);
app.use("/user", userRoute);

//error middleware called during eg next()
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("backend connected");
});
