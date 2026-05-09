const Marks = require("../models/Marks");
const User = require("../models/User");
const nodemailer = require("nodemailer");

// email setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ➕ Add marks + check low marks
exports.addMarks = async (req, res) => {
  try {
    const { studentId, subject, marks } = req.body;

    const newMarks = await Marks.create({ studentId, subject, marks });

    // 🔴 LOW MARK ALERT (below 40)
    if (marks < 40) {
      const student = await User.findOne({ roll: studentId });

      if (student && student.email) {
        await transporter.sendMail({
          to: student.email,
          subject: "Low Marks Alert",
          text: `Your marks in ${subject} is ${marks}. Please improve.`
        });
      }
    }

    res.json(newMarks);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};