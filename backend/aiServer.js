import express from "express";
import cors from "cors";
import multer from "multer";
import * as faceapi from "face-api.js";
import canvas from "canvas";

const { Canvas, Image, ImageData } = canvas;

faceapi.env.monkeyPatch({
  Canvas,
  Image,
  ImageData,
});

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

async function loadModels() {
  console.log("Loading AI Models...");
}

loadModels();

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Attendance Server Running",
  });
});

app.post("/scan-face", upload.single("image"), async (req, res) => {
  try {
    res.json({
      success: true,
      student: "Sangeetha",
      attendance: "Present",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Face Recognition Failed",
    });
  }
});

app.listen(5001, () => {
  console.log("AI Server Running On Port 5001");
});