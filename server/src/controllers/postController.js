import PostModel from "../models/PostModel.js";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
// import ReactionModel from "../models/ReactionModel.js";

export const createPost = async (req, res, next) => {
  const token = await req.headers["access_token"];

  jwt.verify(token, process.env.JWT_KEY, async (err, verifiedJwt) => {
    if (err) return next(err);
    try {
      const newPost = PostModel(req.body);
      newPost._doc.userId = verifiedJwt.id;
      await newPost.save();
      res.status(200).json({ message: "post created sucessfully" });
    } catch (error) {
      next(error);
    }
  });
};

export const getPosts = async (req, res, next) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};
export const getPostPerUser = async (req, res, next) => {
  const token = await req.headers["access_token"];

  jwt.verify(token, process.env.JWT_KEY, async (err, verifiedJwt) => {
    if (err) return next(err);
    try {
      const posts = await PostModel.find({ userId: verifiedJwt.id });
      res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  });
};

// export const reactionPost = async (req, res) => {
//   try {
//     const id = req.headers["id"];
//     const inc = req.body.inc;
//   } catch (err) {
//     res.status(400).json(err);
//   }
// };

// export const createRxn = async (req, res) => {
//   try {
//     const rxn = ReactionModel(req.body);
//     await rxn.save();
//     res.status(200).json(rxn);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// };
