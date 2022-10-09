import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const getall = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const getUserbyToken = async (req, res) => {
  const token = await req.headers["access_token"];

  jwt.verify(token, process.env.JWT_KEY, async (err, verifiedJwt) => {
    if (err) return res.status(400).json(err.message);
    try {
      const user = await UserModel.findById(verifiedJwt.id);
      const { password, ...rest } = user._doc;
      res.status(200).json(rest);
    } catch (err) {
      res.status(400).json(err);
    }
  });
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    res.status(400).json(err);
  }
};
