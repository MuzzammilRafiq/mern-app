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
// router.get("/reaction", reactionPost);
// router.post("/rxn", createRxn);

export default router;
