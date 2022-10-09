import express from "express";
import {
  deleteUser,
  getall,
  getUser,
  getUserbyToken,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/", getall); //get all users
router.get("/getone/:id", getUser); //get specific user base on id
router.get("/get", getUserbyToken); //get specific user base on token
router.put("/:id", updateUser); //update
router.delete("/:id", deleteUser); //delete

export default router;
