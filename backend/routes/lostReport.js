import express from "express";
import upload from "../middleware/multer.js";
import { CreateNewLost } from "../controllers/lostReportController.js";
import isLoggedIn from "../middleware/isLogin.js";

const router = express.Router();

router.post(
  "/newLostReport",
  isLoggedIn,
  upload.single("image"),
  CreateNewLost,
);

export default router;
