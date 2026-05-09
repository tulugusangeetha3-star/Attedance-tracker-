const express = require("express");
const router = express.Router();

const {
  markAttendance,
  getAttendance,
  getAbsent2Days
} = require("../controllers/attendanceController");

router.post("/mark", markAttendance);
router.get("/", getAttendance);
router.get("/absent", getAbsent2Days);

module.exports = router;