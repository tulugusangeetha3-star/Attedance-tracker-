const mongoose = require("mongoose");

const MarksSchema = new mongoose.Schema({
    studentId: String,
    subject: String,
    marks: Number
});

module.exports = mongoose.model("Marks", MarksSchema);
