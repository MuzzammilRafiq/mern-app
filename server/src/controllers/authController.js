import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../models/UserModel.js";

export const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const userPresent = await UserModel.find({ username: req.body.username });
    console.log(userPresent);
    if (
      userPresent === null ||
      userPresent === undefined ||
      userPresent === []
    ) {
      return res.status(200).json({ message: "user unavailable" });
    }
    const newUser = UserModel({ ...req.body, password: hash });

    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    res.status(400).json(err.stack);
  }
};
export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).json({ message: "no user found" });
    }

    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res
        .status(400)
        .json({ message: "incorrect username or password" });
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
    res.status(400).json(err);
  }
};

// export const logout = async (req, res) => {
//   try {
//     // await res.clearCookie("access_token");
//     res.status(200).send("logged out");
//   } catch (err) {
//     Error(res, err, 400);
//   }
// };
