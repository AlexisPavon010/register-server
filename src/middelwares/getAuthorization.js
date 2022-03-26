export const getAuthorization = (req, res, next) => {
  const token = req.header("Authorization");
  if (token) {
    return req.header("Authorization").split(" ")[1], next();
  }
  res.status(502).json({ Error: "Authorization token is required" });
  next();
};
