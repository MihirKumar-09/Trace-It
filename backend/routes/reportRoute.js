import express from "express";

import isLoggedIn from "../middleware/isLogin.js";

import {
  AllReports,
  DeleteOwnReport,
  MyClaim,
  ReportDetails,
  UpdateStatus,
  UserReport,
} from "../controllers/reportsController.js";
const router = express.Router();

//! =========GET -> ALL REPORTS==========
router.get("/allReports", AllReports);

//!=========GET SPECIFIC REPORT DETAILS=========
router.get("/lostItem/:id", ReportDetails);

//!============DELETE THERE OWN REPORT==========
router.delete("/deleteReport/:id", isLoggedIn, DeleteOwnReport);

//!==========FETCH SPECIFIC USER REPORT==========
router.get("/my-reports", isLoggedIn, UserReport);

//!==========UPDATE STATUS=============
router.patch("/updateStatus/:id", isLoggedIn, UpdateStatus);

//!=========TRACK MY CLAIM=========
router.get("/claims/my-claims", isLoggedIn, MyClaim);

export default router;
