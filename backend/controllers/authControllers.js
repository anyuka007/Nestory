import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { get } from "mongoose";
dotenv.config();

const { JWT_SECRET } = process.env;

export function verifyJwt(token) {
    if (!token) return;

    return jwt.verify(token, JWT_SECRET);
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// function isStrongPassword(password) {
//   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
//   return regex.test(password);
// }

function isStrongPassword(password) {
    return password.length >= 8;
}

export const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        // if (!isStrongPassword(password)) {
        //   return res.status(400).json({
        //     message:
        //       "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, and a number.",
        //   });
        // }

        if (!isStrongPassword(password)) {
            return res
                .status(400)
                .json({ message: "Password must be 8 characters or langer" });
        }

        const hashedPassword = await bcrypt.hash(password, 13);

        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.cookie("token", token, { httpOnly: true });

        console.log("Register successful");

        res.status(201).json({ message: "User registered", token });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Проверка дали корисникот постои , ovoj user ima so wie so id nummer
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Генерирање на JWT токен , so jwt go pretvoram mojot id , tokenot mi e ist so mojot id
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  res.cookie("jwt", token, { httpOnly: true, maxAge: 3600000 });

  console.log("Login successful");

  res.status(200).json({ message: "Login successful", success: true, user });
};
