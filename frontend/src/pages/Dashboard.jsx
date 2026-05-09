import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/students")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log("Error fetching students:", err);
      });
  }, []);

  return (
    <div className="dashboard-container">
      
      {/* Header */}
      <div className="dashboard-header">
        <h1>AI Attendance Tracker Dashboard</h1>
      </div>

      {/* Top Cards */}
      <div className="top-cards">
        <div className="card">
          <h2>Total Students</h2>
          <p>120</p>
        </div>

        <div className="card">
          <h2>Present Today</h2>
          <p className="present">105</p>
        </div>

        <div className="card">
          <h2>Absent Today</h2>
          <p className="absent">15</p>
        </div>
      </div>

      {/* Login Section */}
      <div className="login-section">
        
        {/* Teacher Login */}
        <div className="login-box">
          <h2>Teacher Login</h2>

          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Login</button>
        </div>

        {/* Student Login */}
        <div className="login-box">
          <h2>Student Login</h2>

          <input type="text" placeholder="Roll Number" />
          <input type="password" placeholder="Password" />

          <button>Login</button>
        </div>
      </div>

      {/* AI Scanner */}
      <div className="scanner-section">
        <h2>AI Face Attendance Scanner</h2>

        <div className="upload-box">
          Upload Class Photo Here
        </div>

        <button className="scan-btn">
          Scan Attendance
        </button>
      </div>

      {/* Student Data */}
      <div className="students-section">
        <h2>Student Attendance Data</h2>

        {students.map((student, index) => (
          <div className="student-card" key={index}>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Roll:</strong> {student.roll}</p>
            <p><strong>Attendance:</strong> {student.attendance}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Dashboard;