import { useState } from "react";

function App() {
  const [students] = useState([
    { name: "Rahul", attendance: "92%" },
    { name: "Priya", attendance: "88%" },
    { name: "Arjun", attendance: "95%" },
  ]);

  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#38bdf8",
        }}
      >
        AI Attendance Tracker
      </h1>

      {/* LOGIN */}
      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Teacher Email"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Login
        </button>
      </div>

      {/* DASHBOARD */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>Total Students</h2>
          <h1>120</h1>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>Present Today</h2>
          <h1>105</h1>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>Absent Today</h2>
          <h1>15</h1>
        </div>
      </div>

      {/* FACE SCAN */}
      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "25px",
        }}
      >
        <h2>AI Face Attendance Scanner</h2>

        <div
          style={{
            border: "2px dashed gray",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
          }}
        >
          Upload Class Photo Here
        </div>

        <button
          style={{
            marginTop: "15px",
            padding: "12px",
            background: "#16a34a",
            border: "none",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Scan Attendance
        </button>
      </div>

      {/* STUDENT LIST */}
      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "25px",
        }}
      >
        <h2>Student Attendance</h2>

        {students.map((student, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid gray",
            }}
          >
            <span>{student.name}</span>
            <span>{student.attendance}</span>
          </div>
        ))}
      </div>

      {/* ALERTS */}
      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "25px",
        }}
      >
        <h2>Parent Alerts</h2>

        <p>📩 SMS Alerts Enabled</p>
        <p>📧 Email Alerts Enabled</p>

        <button
          style={{
            padding: "12px",
            background: "#dc2626",
            border: "none",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Send Alerts
        </button>
      </div>
    </div>
  );
}

export default App;