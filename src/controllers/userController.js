import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.get("/register", (req, res) => {
  res.render("user/register");
});
userController.post("/register", async (req, res) => {
  // get user data username password and rePass
  const userData = req.body;
  // send user data to service
  await userService.register(userData);

  res.redirect("/users/login");
});

userController.get("/login", (req, res) => {
  res.render("user/login");
});
userController.post("/login", async (req, res) => {
  // get login data
  const userData = req.body;

  const token = await userService.login(userData);
  res.cookie("auth", token);

  res.redirect("/");
});

export default userController;
