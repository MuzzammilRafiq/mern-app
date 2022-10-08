import PostModel from "../models/PostModel.js";

export const createPost = async (req, res) => {
  try {
    const newPost = PostModel(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json(err);
  }
};
