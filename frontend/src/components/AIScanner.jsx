import { useRef, useState } from "react";

function AIScanner() {
  const videoRef = useRef(null);
  const [cameraOn, setCameraOn] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      videoRef.current.srcObject = stream;
      setCameraOn(true);
    } catch (error) {
      console.log(error);
      alert("Camera access denied");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      <h1>AI Attendance Scanner</h1>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        width="500"
        height="350"
        style={{
          borderRadius: "20px",
          border: "4px solid black",
          background: "#000",
        }}
      />

      <button
        onClick={startCamera}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        {cameraOn ? "Camera Running" : "Start Scanner"}
      </button>
    </div>
  );
}

export default AIScanner;