import bcrypt from "bcryptjs";
import UserModel from "../models/UserModel.js";

export const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = UserModel({ ...req.body, password: hash });

    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
};
export const login = async (req, res) => {
  try {
  } catch (err) {}
};

export const logout = async (req, res) => {
  try {
  } catch (err) {}
};
