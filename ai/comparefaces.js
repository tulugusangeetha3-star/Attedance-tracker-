const faceapi = require("face-api.js");

const canvas = require("canvas");

const path = require("path");

const {
    Canvas,
    Image,
    ImageData
} = canvas;

faceapi.env.monkeyPatch({
    Canvas,
    Image,
    ImageData
});

async function compareFaces(
    studentImagePath,
    classImagePath
){

    try{

        // Load Images
        const studentImage =
            await canvas.loadImage(
                studentImagePath
            );

        const classImage =
            await canvas.loadImage(
                classImagePath
            );

        // Detect student face
        const studentDetection =
            await faceapi
            .detectSingleFace(
                studentImage,
                new faceapi.TinyFaceDetectorOptions()
            )
            .withFaceLandmarks()
            .withFaceDescriptor();

        if(!studentDetection){

            console.log(
                "No face found in student image"
            );

            return false;
        }

        // Detect all faces in class image
        const classDetections =
            await faceapi
            .detectAllFaces(
                classImage,
                new faceapi.TinyFaceDetectorOptions()
            )
            .withFaceLandmarks()
            .withFaceDescriptors();

        if(classDetections.length === 0){

            console.log(
                "No faces found in class image"
            );

            return false;
        }

        // Face Matcher
        const faceMatcher =
            new faceapi.FaceMatcher(
                [studentDetection]
            );

        let matched = false;

        // Compare faces
        classDetections.forEach((face) => {

            const bestMatch =
                faceMatcher.findBestMatch(
                    face.descriptor
                );

            console.log(
                "Match Result:",
                bestMatch.toString()
            );

            if(bestMatch.label !== "unknown"){

                matched = true;

            }

        });

        return matched;

    }catch(error){

        console.log(error);

        return false;

    }
}

module.exports = compareFaces;