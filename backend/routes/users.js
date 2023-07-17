import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

// the router allows us to create routes
const router = express.Router();

// this will allow us to register a new user in the database, and encrypt
// their password, so that it is not stored in plain text. if the user already
// exists, we will return a message saying so.
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username, password });
  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();
    return res.json({ message: "User created" });
  }

  return res.json({ message: "User already exists" });
});

// this will allow us to login a user
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.json({ message: "User does not exist" });
  }

  // will use bcrypt to compare the password that the user entered, with the
    // password that is stored in the database.
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.json({ message: "Username or Password is incorrect" });
  }

  // if the user exists, and the password is correct, we will create a token
    // using the jsonwebtoken library, and return the token, and the user id.
  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
});

export { router as userRouter };
