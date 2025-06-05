import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET } from "../config/genaral.js";

export default {
  register(userData) {
    // send data to model
    return User.create(userData);
  },
  async login(userData) {
    const { email, password } = userData;
    const user = await User.findOne({ email });

    if (!user) {
      return new Error("User does not exist!");
    }

    // validate pass
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return new Error("Password is not valid!!");
    }
    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, SECRET, { expiresIn: "2h" });

    return token;
  },
};
