import { useRef, useState } from "react";
import axios from "axios";

function AIScanner() {
  const videoRef = useRef(null);

  const [cameraOn, setCameraOn] = useState(false);
  const [status, setStatus] = useState("Waiting...");

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      videoRef.current.srcObject = stream;
      setCameraOn(true);
    } catch (error) {
      console.log(error);
      alert("Camera Permission Denied");
    }
  };

  const markAttendance = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/scan-face"
      );

      setStatus(response.data.attendance);
    } catch (error) {
      console.log(error);
      setStatus("AI Scan Failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "20px",
        background: "#f5f5f5",
      }}
    >
      <h1>AI Attendance System</h1>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        width="500"
        height="350"
        style={{
          borderRadius: "20px",
          border: "5px solid black",
          background: "black",
        }}
      />

      <div style={{ display: "flex", gap: "15px" }}>
        <button
          onClick={startCamera}
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          {cameraOn ? "Camera Running" : "Start Camera"}
        </button>

        <button
          onClick={markAttendance}
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Mark Attendance
        </button>
      </div>

      <h2>Status: {status}</h2>
    </div>
  );
}

export default AIScanner;