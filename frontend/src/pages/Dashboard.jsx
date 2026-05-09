import React, { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import TopCards from "../components/TopCards";
import ScannerCard from "../components/ScannerCard";
import LoginCards from "../components/LoginCards";
import AttendanceTable from "../components/AttendanceTable";
import DashboardLayout from "../layouts/DashboardLayout";

import "./Dashboard.css";

export default function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("https://your-backend-url.onrender.com/api/students")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log("Error fetching students:", err);
      });
  }, []);

  return (
    <DashboardLayout>
      <div className="dashboard">

        <Sidebar />

        <div className="dashboard-content">

          <TopCards />

          <LoginCards />

          <ScannerCard />

          <AttendanceTable />

          <div className="students-section">
            <h2>Student Attendance Data</h2>

            {students.map((student, index) => (
              <div className="student-card" key={index}>
                <p>
                  <strong>Name:</strong> {student.name}
                </p>

                <p>
                  <strong>Attendance:</strong> {student.attendance}
                </p>

                <p>
                  <strong>Marks:</strong> {student.marks}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}