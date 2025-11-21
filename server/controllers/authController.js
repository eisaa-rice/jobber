import * as UserModel from "../models/userModel.js";
import { createToken } from "../utils/jwt.js";

import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email or password are missing." });
    } else if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ message: "Invalid email, please try again." });
    } else if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long." });
    }

    const existing = await UserModel.findByEmail(email);
    if (existing) {
      return res
        .status(409)
        .json({ message: "User with email already exists." });
    }

    const id = uuidv4();
    const passwordHash = await bcrypt.hash(password, 10);

    const user = await UserModel.create(id, name, email, passwordHash);

    const token = createToken(id);

    res.status(201).json({
      message: "Account created.",
      user: {
        id: user.id,
        name: user.user_name,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findByEmail(email);
    if (!user) {
      res.status(400).json({ message: "No account under that email exists." });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res
        .status(409)
        .json({ message: "Incorrect password, please try again." });
    }

    const token = createToken(user.id);

    return res.json({
      message: "Login successful.",
      user: {
        id: user.id,
        name: user.user_name,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    next(err);
  }
};
