export const auth = (req, res, next) => {
  const token = req.cookies["auth"];

  console.log(token);

  next();
};
