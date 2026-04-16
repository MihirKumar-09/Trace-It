import express from "express";
import {
  FavoriteToggle,
  AllFavorite,
} from "../controllers/favoriteController.js";
import isLoggedIn from "../middleware/isLogin.js";

const router = express.Router();

//!==========TOGGLE FAVORITE==========
router.post("/toggle/:reportId", isLoggedIn, FavoriteToggle);

//!==========GET ALL FAVORITES===========
router.get("/", isLoggedIn, AllFavorite);

export default router;
