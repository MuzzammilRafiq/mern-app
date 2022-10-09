import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const userPresent = await UserModel.find({ username: req.body.username });

    if (userPresent.lenght !== 0) {
      return next(createError(420, "username unavailable"));
    }
    const newUser = UserModel({ ...req.body, password: hash });

    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(404, "no user found"));
    }

    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return next(createError(400, "incorrect username or password"));
    }

    const token = jwt.sign(
      {
        id: user._id, // info stored in
        isAdmin: user.isAdmin, // jwt token
        imgsrc: user.imgsrc,
      },
      process.env.JWT_KEY, // key used to encrypt token
      { expiresIn: "7d" } //expirey date
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin, access_token: token });
  } catch (err) {
    next(err);
  }
};
