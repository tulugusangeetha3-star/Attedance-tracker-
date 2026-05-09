const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,

  rollNumber: String,

  email: String,

  password: String,

  college: String,

  branch: String,

  year: String,

  section: String,

  location: String,

  attendance: {
    type: Number,
    default: 0,
  },

  marks: {
    type: Number,
    default: 0,
  },

  faceId: String,

  fingerprintId: String,
});

module.exports = mongoose.model(
  "Student",
  studentSchema
);