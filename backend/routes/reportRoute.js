import express from "express";
import Report from "../models/reportSchema.js";
const router = express.Router();

//! =========GET -> ALL REPORTS==========
router.get("/allReports", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 15;
    const { status, reportType } = req.query;

    let filter = {};

    // Status Filter
    if (status && status !== "all") {
      filter.status = status;
    }
    // Report type;
    if (reportType) {
      filter.reportType = reportType;
    }

    const allReports = await Report.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit);
    if (allReports.length === 0) {
      return res.status(404).json({ message: "No reports found" });
    }
    return res.status(200).json({ message: "Get all reports", allReports });
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch all reports" });
  }
});

//!=========GET SPECIFIC REPORT DETAILS=========
router.get("/lostItem/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const report = await Report.findById(id);
    if (!report) {
      return res.status(404).json({ message: "This report not found!" });
    }
    return res.status(200).json({ message: "Fetch successfully", report });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to fetch report details", err });
  }
});

export default router;
