const faceapi = require("face-api.js");

const canvas = require("canvas");

const fs = require("fs");

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

async function loadTrainingData(){

    try{

        const studentsPath = path.join(
            __dirname,
            "Student images"
        );

        // Read all student folders
        const students =
            fs.readdirSync(studentsPath);

        const labeledDescriptors = [];

        // Loop each student folder
        for(const studentName of students){

            const studentFolder =
                path.join(
                    studentsPath,
                    studentName
                );

            const imageFiles =
                fs.readdirSync(studentFolder);

            const descriptors = [];

            // Loop student images
            for(const imageFile of imageFiles){

                const imagePath =
                    path.join(
                        studentFolder,
                        imageFile
                    );

                const image =
                    await canvas.loadImage(
                        imagePath
                    );

                // Detect face
                const detection =
                    await faceapi
                    .detectSingleFace(
                        image,
                        new faceapi.TinyFaceDetectorOptions()
                    )
                    .withFaceLandmarks()
                    .withFaceDescriptor();

                if(!detection){

                    console.log(
                        `No face found in ${imageFile}`
                    );

                    continue;
                }

                descriptors.push(
                    detection.descriptor
                );
            }

            // Create labeled face data
            const labeledFaceDescriptor =
                new faceapi.LabeledFaceDescriptors(
                    studentName,
                    descriptors
                );

            labeledDescriptors.push(
                labeledFaceDescriptor
            );

            console.log(
                `${studentName} training loaded`
            );
        }

        return labeledDescriptors;

    }catch(error){

        console.log(
            "Training Data Error:",
            error
        );

    }
}

module.exports = loadTrainingData;