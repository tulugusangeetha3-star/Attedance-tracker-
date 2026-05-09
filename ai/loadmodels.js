const faceapi = require("face-api.js");

const canvas = require("canvas");

const path = require("path");

const {
    Canvas,
    Image,
    ImageData
} = canvas;

// Connect canvas with face-api
faceapi.env.monkeyPatch({
    Canvas,
    Image,
    ImageData
});

async function loadModels(){

    try{

        const MODEL_PATH = path.join(
            __dirname,
            "models"
        );

        // Load Tiny Face Detector
        await faceapi.nets.tinyFaceDetector
        .loadFromDisk(MODEL_PATH);

        // Load Face Landmark Model
        await faceapi.nets.faceLandmark68Net
        .loadFromDisk(MODEL_PATH);

        // Load Face Recognition Model
        await faceapi.nets.faceRecognitionNet
        .loadFromDisk(MODEL_PATH);

        console.log(
            "AI Face Models Loaded Successfully"
        );

    }catch(error){

        console.log(
            "Model Loading Error:",
            error
        );

    }
}

module.exports = loadModels;