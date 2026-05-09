const express = require("express");
const cors = require("cors");
const multer = require("multer");
const faceapi = require("face-api.js");
const canvas = require("canvas");
const path = require("path");

const {
  Canvas,
  Image,
  ImageData,
} = canvas;

faceapi.env.monkeyPatch({
  Canvas,
  Image,
  ImageData,
});

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
  dest: "uploads/",
});

async function loadModels() {
  const MODEL_URL = path.join(
    __dirname,
    "models"
  );

  await faceapi.nets.ssdMobilenetv1.loadFromDisk(
    MODEL_URL
  );

  await faceapi.nets.faceRecognitionNet.loadFromDisk(
    MODEL_URL
  );

  await faceapi.nets.faceLandmark68Net.loadFromDisk(
    MODEL_URL
  );

  console.log("AI Models Loaded");
}

loadModels();

app.get("/", (req, res) => {
  res.send(
    "AI Face Attendance Server Running"
  );
});

app.post(
  "/scan-face",
  upload.single("image"),
  async (req, res) => {
    try {
      const img = await canvas.loadImage(
        req.file.path
      );

      const detections =
        await faceapi
          .detectAllFaces(img)
          .withFaceLandmarks()
          .withFaceDescriptors();

      res.json({
        success: true,
        facesDetected:
          detections.length,
        message:
          detections.length > 0
            ? "Face Detected Successfully"
            : "No Face Found",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Face Scan Failed",
      });
    }
  }
);

const PORT = 5001;

app.listen(PORT, () => {
  console.log(
    `AI Server running on port ${PORT}`
  );
});