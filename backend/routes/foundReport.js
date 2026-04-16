import express from "express";
import { CreateNewFound } from "../controllers/foundController.js";
import upload from "../middleware/multer.js";
import isLoggedIn from "../middleware/isLogin.js";

const router = express.Router();

router.post(
  "/newFoundReport",
  isLoggedIn,
  upload.single("image"),
  CreateNewFound,
);

export default router;
