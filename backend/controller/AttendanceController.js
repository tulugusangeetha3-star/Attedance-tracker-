const Attendance = require("../models/Attendance");
const User = require("../models/User");
const nodemailer = require("nodemailer");

// EMAIL SETUP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// MARK ATTENDANCE
exports.markAttendance = async (req, res) => {
  try {
    const records = req.body;

    await Attendance.insertMany(records);

    // Check low attendance users
    const students = await User.find({ role: "student" });

    for (let s of students) {
      if (s.attendance < 75) {
        await transporter.sendMail({
          to: s.email,
          subject: "Low Attendance Alert",
          text: `Your attendance is ${s.attendance}%`
        });
      }
    }

    res.json({ message: "Attendance marked + emails sent" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ATTENDANCE
exports.getAttendance = async (req, res) => {
  const data = await Attendance.find();
  res.json(data);
};

// 🔴 ABSENT LAST 2 DAYS
exports.getAbsent2Days = async (req, res) => {
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  const absentees = await Attendance.find({
    date: { $gte: twoDaysAgo },
    status: "absent"
  });

  res.json(absentees);
};