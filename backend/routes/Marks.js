const router = require("express").Router();

const {
  addMarks,
  getMarks
} = require("../controllers/marksController");

router.post("/add", addMarks);
router.get("/:studentId", getMarks);

module.exports = router;