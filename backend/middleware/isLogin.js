export const isLoggedIn = (req, res, next) => {
  console.log("Auth check user:", req.user);

  if (!req.user || !req.user._id) {
    return res.status(401).json({
      message: "Unauthorized: User not logged in",
    });
  }

  next();
};

export default isLoggedIn;
