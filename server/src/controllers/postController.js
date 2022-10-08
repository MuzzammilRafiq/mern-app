import PostModel from "../models/PostModel.js";
import jwt from "jsonwebtoken";

export const createPost = async (req, res) => {
  const token = await req.headers["access_token"];

  jwt.verify(token, process.env.JWT_KEY, async (err, verifiedJwt) => {
    if (err) return res.status(400).json(err.message);
    try {
      const newPost = PostModel(req.body);
      newPost._doc.userId = verifiedJwt.id;
      newPost._doc.imgsrc = verifiedJwt.imgsrc;
      await newPost.save();
      res.status(200).json({ message: "post created sucessfully" });
    } catch (err) {
      res.status(400).json(err);
    }
  });
};

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json(err);
  }
};
export const getPostPerUser = async (req, res) => {
  const token = await req.headers["access_token"];

  jwt.verify(token, process.env.JWT_KEY, async (err, verifiedJwt) => {
    if (err) return res.status(400).json(err.message);
    try {
      const posts = await PostModel.find({ userId: verifiedJwt.id });
      res.status(200).json(posts);
    } catch (err) {
      res.status(400).json(err);
    }
  });
};
