import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div
      style={{
        width: '250px',
        height: '100vh',
        background: '#111827',
        color: 'white',
        padding: '20px',
      }}
    >
      <h2 style={{ marginBottom: '30px' }}>
        AI Attendance Tracker
      </h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>

        <li style={{ marginBottom: '20px' }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Dashboard
          </Link>
        </li>

        <li style={{ marginBottom: '20px' }}>
          <Link
            to="/face-attendance"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Face Attendance
          </Link>
        </li>

        <li style={{ marginBottom: '20px' }}>
          <Link
            to="/students"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Students
          </Link>
        </li>

        <li style={{ marginBottom: '20px' }}>
          <Link
            to="/marks"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Marks & Performance
          </Link>
        </li>

        <li style={{ marginBottom: '20px' }}>
          <Link
            to="/alerts"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Alerts
          </Link>
        </li>

        <li style={{ marginBottom: '20px' }}>
          <Link
            to="/reports"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Reports
          </Link>
        </li>

        <li style={{ marginBottom: '20px' }}>
          <Link
            to="/profile"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Profile
          </Link>
        </li>

        <li style={{ marginBottom: '20px' }}>
          <Link
            to="/settings"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Settings
          </Link>
        </li>

      </ul>

      <div style={{ marginTop: '50px', fontSize: '12px' }}>
        Smart Campus Solution © 2025
      </div>
    </div>
  );
}

export default Sidebar;