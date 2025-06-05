import { Router } from "express";

const userController = Router();

userController.get("/register", (req, res) => {
  res.render("user/register");
});
userController.post("/register", async (req, res) => {
  // get user data username password and rePass
  const userData = req.body;
  // send user data to service
  await userService.register();
});

userController.get("/login", (req, res) => {
  res.render("user/login");
});

export default userController;
