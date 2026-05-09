const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "AI Attendance Tracker Backend Running"
  });
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected Successfully");
})
.catch((err) => {
  console.log(err);
});

app.get("/api/students", (req, res) => {

  const students = [
    {
      id: 1,
      name: "Rahul",
      attendance: "92%",
      marks: 85
    },
    {
      id: 2,
      name: "Priya",
      attendance: "88%",
      marks: 78
    }
  ];

  res.json(students);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});