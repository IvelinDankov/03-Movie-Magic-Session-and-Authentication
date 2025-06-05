import jwt from "jsonwebtoken";
import { SECRET } from "../config/genaral.js";

export const auth = (req, res, next) => {
  const token = req.cookies["auth"];

  if (!token) {
    return next();
  }
  try {
    const { id, email } = jwt.verify(token, SECRET);

    req.user = { id, email };

    res.locals.user = { id, email };

    next();
  } catch (err) {
    res.clearCookie("auth");
    res.redirect("/user/login");
  }
};
