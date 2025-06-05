import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  email: {
    type: String,
    requred: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function () {
  const hashedPassword = await bcrypt.hash(this.password, 10);

  return hashedPassword;
});

const User = model("User", userSchema);

export default User;
