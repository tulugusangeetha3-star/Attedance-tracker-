import * as faceapi from "face-api.js";

export const loadModels = async () => {
  const MODEL_URL = "/models";

  await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
  await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
  await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
};

// MATCH FACES
export const matchFaces = async (image, labeledDescriptors) => {
  const detections = await faceapi
    .detectAllFaces(image)
    .withFaceLandmarks()
    .withFaceDescriptors();

  const matcher = new faceapi.FaceMatcher(labeledDescriptors);

  return detections.map(d =>
    matcher.findBestMatch(d.descriptor).toString()
  );
};