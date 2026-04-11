import express from "express";
const router = express.Router();
import passport from "passport";
import User from "../models/User.js";
import isLogin from "../middleware/isLogin.js";

//! Google SignUp and Login
// Step 1 -> Login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

// Step 2 -> Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.redirect("http://localhost:5173/auth-success"); // Frontend redirect(Store the path in local storage and redirect to that page)
  },
);

// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.send("Logged Out");
  });
});

//!===========FETCH CURRENT USER============
router.get("/me", (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ user: req.user });
  } else {
    return res.status(401).json({ user: null });
  }
});

//!=============UPDATE ACCOUNT STATUS=============
router.put("/update-profile", isLogin, async (req, res) => {
  try {
    const { name, phone } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        name: name.trim(),
        phone: phone ? phone.trim() : "",
      },
      {
        new: true,
        runValidators: true,
      },
    );
    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("update profile error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
});

//! Mobile number SingUp and Login;
router.post("/phone-login", async (req, res, next) => {
  try {
    const { phone, name, email } = req.body;

    let user = await User.findOne({ phone });

    if (!user) {
      user = await User.create({ phone, name, email });
    }
    // Create session
    req.login(user, (err) => {
      if (err) return next(err);
      return res.json({ user });
    });
  } catch (err) {
    next(err);
  }
});

export default router;
