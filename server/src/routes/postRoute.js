import express from "express";
import {
  createPost,
  getPostPerUser,
  getPosts,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.get("/me", getPostPerUser);

export default router;
